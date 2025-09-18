import BlueFrame from "@/components/blueFrame";
import BlueGlow from "@/components/blueGlow";
import MeshVector from "@/components/meshVector";
import MeshVector2 from "@/components/meshVector2";
import NavBar from "@/components/navBar";
import ServiceCarousel from "@/components/serviceCarousel";
import VerticalTextSlider from "@/components/slider";
import { ArrowBigRight, MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <BlueGlow />
        <MeshVector />
        <NavBar />

        <p className="text-[22px] mt-18 border-1 rounded-4xl p-2">
          Bring your business to the best scale
        </p>
        <div className="flex flex-col mt-8 z-20 items-center">
          <p className="font-semibold text-8xl ">
            Crafting <span className="text-[#17CDCA]">Digital </span>
          </p>
          <p className="font-semibold text-8xl items-center">Excellence</p>
        </div>
        <div className="text-lg mt-8 max-w-2xl flex items-center mx-auto px-4">
          <p className="text-[22px] text-center">
            Pushing the boundaries of what&apos;s possible in the digital realm.
            Join us on this journey into the future of technology.
          </p>
        </div>
        <div className="mt-8 flex max-w-4xl gap-10 justify-center items-center">
          <button className="text-[22px] p-3 text-lg bg-[#17CDCA] rounded-2xl">
            Learn More
          </button>
          <div className="flex flex-row items-center gap-3">
            <Image
              src="/assets/icons/review.jpg" // place inside /public/assets/icons
              alt="Future technology"
              width={64} // w-16
              height={64} // h-16
              className="rounded-full"
            />
            <p className="text-[22px] text-gray-800">
              Trusted by over+ 20K people in the World
            </p>
          </div>
        </div>
        <div className="mt-10">
          <BlueFrame />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <p className="text-7xl font-medium">
          <span className="font-kaushan">Services</span> we offer{" "}
        </p>
        <div className="text-[22px] mt-8 max-w-2xl flex items-center mx-auto px-4">
          <p className="text-center">
            Pushing the boundaries of what&apos;s possible in the digital realm.
            Join us on this journey into the future of technology.
          </p>
        </div>
        <div className="mt-8">
          <ServiceCarousel />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        {/* <MeshVector /> */}
        <MeshVector2 />
        <div className="flex flex-row items-center gap-12">
          <div className="flex flex-col gap-6 flex-1 max-w-lg">
            <p className="text-7xl font-medium">
              To upscale your <span className="font-kaushan">business</span> to
              the next level
            </p>
            <p className="text-[22px] text-gray-600">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua invidunt ut labore.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={"/assets/icons/tick.png"}
                  alt={"check mark"}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                <p className="text-[22px]">
                  Project templates to kick-start a new project
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={"/assets/icons/tick.png"}
                  alt={"check mark"}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                <p className="text-[22px]">
                  Clone task to speed your time to action
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={"/assets/icons/tick.png"}
                  alt={"check mark"}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                <p className="text-[22px]">
                  Communicate and collaborate with your team and clients
                </p>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <Image
                  src={"/assets/icons/tick.png"}
                  alt={"check mark"}
                  width={24}
                  height={24}
                  className="flex-shrink-0"
                />
                <p className="text-[22px]">Time tracking for the whole team</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={"/assets/images/todaysActivity.png"}
              alt={"today's activity dashboard"}
              width={686}
              height={487}
              style={{ opacity: 1 }}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-12">
          <div className="text-center mb-8">
            <p className="text-5xl font-medium">
              Our <span className="font-kaushan">design</span> and
              <br />
              <span className="font-kaushan">development</span> approach
            </p>
          </div>
          <div className="grid grid-cols-4 p-8">
            <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
              <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
                <p className="text-[26px] font-bold">UX Driven Engineering</p>
                <p className="text-[22px] text-[#585858]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div></div>
            <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
              <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
                <p className="text-[26px] font-bold">
                  Proven Experience and Expertise
                </p>
                <p className="text-[22px] text-[#585858]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-4 p-8">
            <div></div>
            <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
              <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
                <p className="text-[26px] font-bold">
                  Developing Shared Understanding
                </p>
                <p className="text-[22px] text-[#585858]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div></div>
            <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
              <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
                <p className="text-[26px] font-bold">
                  Quality Assurance & Testing
                </p>
                <p className="text-[22px] text-[#585858]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 p-8">
            <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
              <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
                <p className="text-[26px] font-bold">
                  Security & Intellectual Property
                </p>
                <p className="text-[22px] text-[#585858]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div></div>
            <div className="p-3 shadow-[0px_0px_15px_rgba(23,205,202,0.47)] rounded-lg">
              <div className="flex flex-col p-5 gradient-border rounded-2xl gap-4 ">
                <p className="text-[26px] font-bold">Code Reviews</p>
                <p className="text-[22px] text-[#585858]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. sit
                  Lorem ipsum dolor sit amet, elit consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-12">
          <div className="flex flex-row ml-15 mr-15 gap-5 mt-8">
            <div className="flex flex-col justify-around">
              <VerticalTextSlider />
              <div className="text-[22px] flex items-center">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore
                </p>
              </div>
            </div>
            <div className="flex flex-col vision-border p-6 text-center gap-4">
              <h1 className="text-[26px] font-bold">Consulting</h1>
              <p className="text-[22px] text-[#585858]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
              </p>
              <div className="flex flex-row gap-2 text-[#17CDCA] text-[22px]">
                <p>Get Started</p>
                <MoveRight />
              </div>
            </div>
            <div className="flex flex-col vision-border-middle p-6 text-center gap-4">
              <h1 className="text-[26px] font-bold">Implementation</h1>
              <p className="text-[22px] text-[#585858]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
              </p>
              <div className="flex flex-row gap-2 text-[#17CDCA] text-[22px]">
                <p>Get Started</p>
                <MoveRight />
              </div>
            </div>
            <div className="flex flex-col vision-border p-6 text-center gap-4">
              <h1 className="text-[26px] font-bold">Distribution</h1>
              <p className="text-[22px] text-[#585858]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
              </p>
              <div className="flex flex-row gap-2 text-[#17CDCA] text-[22px]">
                <p>Get Started</p>
                <MoveRight />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 mb-10 ">
          <svg
            width="1343"
            height="58"
            viewBox="0 0 1343 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 4.82469L503.89 1.09953C512.708 1.03434 521.386 3.30247 529.045 7.67386L603.771 50.3261C611.43 54.6975 620.108 56.9657 628.927 56.9005L1343 51.6215"
              stroke="url(#paint0_linear_1085_1810)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1085_1810"
                x1="0"
                y1="29"
                x2="1343"
                y2="29"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#17CDCA" stopOpacity="0" />
                <stop offset="0.457843" stopColor="#17CDCA" />
                <stop offset="1" stopColor="#17CDCA" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div>
          <div className="w-[369px] border-1 rounded-4xl p-5">
            <h1 className="text-[30px]">Projects</h1>
            <p className="text-[22px] text-[#585858]">
              Easily organize tasks, set deadlines, and track progress in
              real-time with Ease.
            </p>
            <svg
              width="318"
              height="215"
              viewBox="0 0 318 215"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1085_1819)">
                <path
                  d="M44.6 45.6972C43.0651 42.3835 45.485 38.5957 49.1369 38.5957H173.03C174.997 38.5957 176.781 39.7492 177.589 41.5431L226.655 150.527C228.145 153.836 225.724 157.579 222.096 157.579H99.6185C97.6707 157.579 95.9002 156.448 95.0815 154.681L44.6 45.6972Z"
                  fill="url(#paint0_linear_1085_1819)"
                  fill-opacity="0.18"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M49.1367 39.0957H173.029C174.8 39.0957 176.406 40.1338 177.133 41.748L226.199 150.732C227.54 153.71 225.361 157.079 222.096 157.079H99.6182C97.8653 157.079 96.2719 156.061 95.5352 154.471L45.0537 45.4873C43.6723 42.505 45.8501 39.0958 49.1367 39.0957Z"
                  stroke="url(#paint1_linear_1085_1819)"
                  shape-rendering="crispEdges"
                />
              </g>
              <g filter="url(#filter1_d_1085_1819)">
                <path
                  d="M79.6254 28.1835C78.0905 24.8698 80.5104 21.082 84.1623 21.082H208.055C210.022 21.082 211.807 22.2356 212.614 24.0294L261.68 133.013C263.17 136.322 260.75 140.066 257.121 140.066H134.644C132.696 140.066 130.926 138.935 130.107 137.167L79.6254 28.1835Z"
                  fill="url(#paint2_linear_1085_1819)"
                  fill-opacity="0.18"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M84.1621 21.582H208.055C209.825 21.582 211.431 22.6201 212.158 24.2344L261.225 133.219C262.565 136.197 260.387 139.565 257.121 139.565H134.644C132.891 139.565 131.297 138.548 130.561 136.957L80.0791 27.9736C78.6977 24.9914 80.8755 21.5822 84.1621 21.582Z"
                  stroke="url(#paint3_linear_1085_1819)"
                  shape-rendering="crispEdges"
                />
              </g>
              <g filter="url(#filter2_d_1085_1819)">
                <path
                  d="M117.709 7.99994C116.174 4.68624 118.594 0.898438 122.246 0.898438H246.139C248.106 0.898438 249.891 2.05198 250.698 3.84579L299.764 112.83C301.254 116.138 298.834 119.882 295.205 119.882H172.728C170.78 119.882 169.01 118.751 168.191 116.984L117.709 7.99994Z"
                  fill="url(#paint4_linear_1085_1819)"
                  fill-opacity="0.75"
                  shape-rendering="crispEdges"
                />
                <path
                  d="M122.246 1.39844H246.139C247.909 1.39844 249.515 2.43648 250.242 4.05078L299.309 113.035C300.649 116.013 298.471 119.382 295.205 119.382H172.728C170.975 119.382 169.381 118.364 168.645 116.773L118.163 7.79004C116.782 4.80777 118.959 1.39857 122.246 1.39844Z"
                  stroke="url(#paint5_linear_1085_1819)"
                  shape-rendering="crispEdges"
                />
              </g>
              <g filter="url(#filter3_d_1085_1819)">
                <path
                  d="M195.817 37.3047H202.175L221.736 83.4763H214.89L195.817 37.3047Z"
                  fill="url(#paint6_linear_1085_1819)"
                />
              </g>
              <path
                d="M236.855 55.418L234.479 61.8427L180.505 64.3492L183.065 57.4302L236.855 55.418Z"
                fill="url(#paint7_linear_1085_1819)"
              />
              <g filter="url(#filter4_d_1085_1819)">
                <path
                  d="M260.431 87.3174C260.033 85.8302 261.393 84.4694 262.881 84.8679L285.432 90.9106C287.38 91.4324 287.442 94.2764 285.568 95.0209C277.471 98.2375 273.212 102.066 270.663 108.195C269.845 110.162 266.567 110.218 266.016 108.16L260.431 87.3174Z"
                  fill="#17CDCA"
                  fill-opacity="0.46"
                  shape-rendering="crispEdges"
                />
              </g>
              <g filter="url(#filter5_d_1085_1819)">
                <path
                  d="M271.311 121.361C271.112 120.617 271.792 119.937 272.536 120.136L283.224 123C284.198 123.261 284.232 124.684 283.296 125.061C279.532 126.576 277.512 128.379 276.289 131.22C275.868 132.198 274.222 132.224 273.946 131.195L271.311 121.361Z"
                  fill="#17CDCA"
                  fill-opacity="0.46"
                  shape-rendering="crispEdges"
                />
              </g>
              <g filter="url(#filter6_d_1085_1819)">
                <path
                  d="M291.647 125.968C291.448 125.225 292.128 124.544 292.872 124.744L303.56 127.608C304.534 127.869 304.568 129.292 303.632 129.668C299.868 131.184 297.848 132.986 296.625 135.827C296.204 136.805 294.558 136.831 294.282 135.802L291.647 125.968Z"
                  fill="#17CDCA"
                  fill-opacity="0.46"
                  shape-rendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1085_1819"
                  x="0.33086"
                  y="7.7957"
                  width="270.571"
                  height="206.584"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="13" />
                  <feGaussianBlur stdDeviation="21.9" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.904762 0 0 0 0.46 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1085_1819"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1085_1819"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_1085_1819"
                  x="61.5562"
                  y="21.082"
                  width="218.171"
                  height="156.584"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="20" />
                  <feGaussianBlur stdDeviation="8.8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1085_1819"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1085_1819"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d_1085_1819"
                  x="99.6402"
                  y="0.898438"
                  width="218.171"
                  height="156.584"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="20" />
                  <feGaussianBlur stdDeviation="8.8" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.339197 0 0 0 0 0.911538 0 0 0 0 0.902104 0 0 0 0.46 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1085_1819"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1085_1819"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d_1085_1819"
                  x="191.817"
                  y="37.3047"
                  width="33.9189"
                  height="54.1719"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1085_1819"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1085_1819"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter4_d_1085_1819"
                  x="256.361"
                  y="84.7969"
                  width="34.5732"
                  height="32.8906"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1085_1819"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1085_1819"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter5_d_1085_1819"
                  x="267.276"
                  y="120.102"
                  width="20.7002"
                  height="19.8594"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1085_1819"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1085_1819"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter6_d_1085_1819"
                  x="287.612"
                  y="124.709"
                  width="20.7002"
                  height="19.8594"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1085_1819"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1085_1819"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1085_1819"
                  x1="92.8194"
                  y1="38.5957"
                  x2="154.629"
                  y2="157.579"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#17CDCA" />
                  <stop offset="1" stop-color="#0C8381" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1085_1819"
                  x1="195.062"
                  y1="157.579"
                  x2="76.0785"
                  y2="38.5957"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#999999" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1085_1819"
                  x1="127.845"
                  y1="21.082"
                  x2="189.655"
                  y2="140.066"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#17CDCA" />
                  <stop offset="1" stop-color="#0C8381" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1085_1819"
                  x1="230.088"
                  y1="140.066"
                  x2="111.104"
                  y2="21.082"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#999999" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_1085_1819"
                  x1="165.929"
                  y1="0.898435"
                  x2="227.739"
                  y2="119.882"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#17CDCA" />
                  <stop offset="1" stop-color="#0C8B89" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_1085_1819"
                  x1="268.172"
                  y1="119.882"
                  x2="149.188"
                  y2="0.898445"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="#999999" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_1085_1819"
                  x1="208.777"
                  y1="37.3047"
                  x2="208.777"
                  y2="83.4763"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#17CDCA" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_1085_1819"
                  x1="232.01"
                  y1="68.5146"
                  x2="185.35"
                  y2="51.2525"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#17CDCA" />
                  <stop offset="1" stop-color="white" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
