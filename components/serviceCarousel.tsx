"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { id: 1, title: 'Card 1', color: 'bg-blue-500' },
        { id: 2, title: 'Card 2', color: 'bg-purple-500' },
        { id: 3, title: 'Card 3', color: 'bg-pink-500' },
        { id: 4, title: 'Card 4', color: 'bg-orange-500' },
        { id: 5, title: 'Card 5', color: 'bg-green-500' },
    ];

    const getCardData = (index: number) => {
        const cardIndex = ((index % cards.length) + cards.length) % cards.length;
        return cards[cardIndex];
    };

    const getCardStyle = (index: number) => {
        const distance = index - currentIndex;
        const absDistance = Math.abs(distance);

        // Hide cards that are too far away
        if (absDistance > 2) {
            return {
                transform: `translateX(${distance * 280}px) translateY(-80px) scale(0.8)`,
                opacity: 0,
                zIndex: 0,
                pointerEvents: 'none' as const,
            };
        }

        // Position 0 (center): baseline (0px up)
        // Position 1 (±1 from center): 40px up
        // Position 2 (±2 from center): 80px up
        const translateY = absDistance === 0 ? 0 : absDistance === 1 ? -40 : -80;

        // Scale and opacity based on distance
        const scale = absDistance === 0 ? 1 : absDistance === 1 ? 0.9 : 0.8;
        const opacity = absDistance === 0 ? 1 : absDistance === 1 ? 0.8 : 0.6;

        return {
            transform: `translateX(${distance * 280}px) translateY(${translateY}px) scale(${scale})`,
            opacity: opacity,
            zIndex: 5 - absDistance,
        };
    };

    const next = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const prev = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    // Generate indices to render (current index ± 2)
    const indicesToRender = [];
    for (let i = currentIndex - 2; i <= currentIndex + 2; i++) {
        indicesToRender.push(i);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-8">
            <div className="relative w-full max-w-6xl">
                {/* Carousel Container */}
                <div className="relative h-96 flex items-end justify-center overflow-hidden">
                    {indicesToRender.map((index) => {
                        const card = getCardData(index);
                        return (
                            <div
                                key={index}
                                className={`absolute w-64 h-80 ${card.color} rounded-2xl shadow-2xl transition-all duration-500 ease-out cursor-pointer`}
                                style={getCardStyle(index)}
                                onClick={() => setCurrentIndex(index)}
                            >
                                <div className="flex flex-col items-center justify-center h-full text-white p-6">
                                    <div className="text-6xl font-bold mb-4">{card.id}</div>
                                    <div className="text-2xl font-semibold">{card.title}</div>
                                    {index === currentIndex && (
                                        <div className="mt-4 px-4 py-2 bg-white bg-opacity-20 rounded-lg text-sm">
                                            Active
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                </button>

                <button
                    onClick={next}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
                >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {cards.map((card, index) => (
                        <button
                            key={card.id}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                                (currentIndex % cards.length) === index
                                    ? 'bg-white w-8'
                                    : 'bg-white bg-opacity-40'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCarousel;