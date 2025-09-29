import Image from "next/image";

type Post = {
  id: number;
  name: string;
  handle: string;
  content: string;
  avatar: string;
};

export default function Reviews() {
  const posts: Post[] = [
    {
      id: 1,
      name: "Mike Johnson",
      handle: "@mike_tech",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "/assets/images/image1.png",
    },
    {
      id: 2,
      name: "Mike Johnson",
      handle: "@john_tech",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "/assets/images/image1.png",
    },
    {
      id: 3,
      name: "Mike Johnson",
      handle: "@john_tech",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "/assets/images/image1.png",
    },
    {
      id: 4,
      name: "Mike Johnson",
      handle: "@mike_tech",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur",
      avatar: "/assets/images/image1.png",
    },
    {
      id: 5,
      name: "Mike Johnson",
      handle: "@mike_tech",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      avatar: "/assets/images/image1.png",
    },
    {
      id: 6,
      name: "Mike Johnson",
      handle: "@mike_tech",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "/assets/images/image1.png",
    },
    {
      id: 7,
      name: "Mike Johnson",
      handle: "@john_tech",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur",
      avatar: "/assets/images/image1.png",
    },
    {
      id: 8,
      name: "Mike Johnson",
      handle: "@mike_tech",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur",
      avatar: "/assets/images/image1.png",
    },
  ];

  // Proper typing
  const distributeIntoColumns = (
    items: Post[],
    numColumns: number
  ): Post[][] => {
    const columns: Post[][] = Array.from({ length: numColumns }, () => []);
    items.forEach((item, index) => {
      columns[index % numColumns].push(item);
    });
    return columns;
  };

  const columns = distributeIntoColumns(posts, 3);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-4">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex-1 flex flex-col gap-4">
              {column.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <Image
                      width={48}
                      height={48}
                      src={post.avatar}
                      alt={post.name}
                      className="rounded-full flex-shrink-0"
                    />
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-1">
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {post.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-[16px] text-gray-500">
                        <span>{post.handle}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-[22px] leading-relaxed">
                    {post.content}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
