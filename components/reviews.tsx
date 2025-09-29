import Image from "next/image";

type Post = {
  id: number;
  name: string;
  handle: string;
  time: string;
  content: string;
  avatar: string;
};

export default function Reviews() {
  const posts: Post[] = [
    {
      id: 1,
      name: "Mike Johnson",
      handle: "@mike_tech",
      time: "3m",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike1",
    },
    {
      id: 2,
      name: "Mike Johnson",
      handle: "@john_tech",
      time: "5m",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike2",
    },
    {
      id: 3,
      name: "Mike Johnson",
      handle: "@john_tech",
      time: "10m",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike3",
    },
    {
      id: 4,
      name: "Mike Johnson",
      handle: "@mike_tech",
      time: "25m",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike4",
    },
    {
      id: 5,
      name: "Mike Johnson",
      handle: "@mike_tech",
      time: "45m",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike5",
    },
    {
      id: 6,
      name: "Mike Johnson",
      handle: "@mike_tech",
      time: "54m",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike6",
    },
    {
      id: 7,
      name: "Mike Johnson",
      handle: "@john_tech",
      time: "1h",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike7",
    },
    {
      id: 8,
      name: "Mike Johnson",
      handle: "@mike_tech",
      time: "2h",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike8",
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
                  <div className="flex items-start gap-3">
                    <Image
                      width={48}
                      height={48}
                      src={post.avatar}
                      alt={post.name}
                      className="rounded-full flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1">
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {post.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{post.handle}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-700 leading-relaxed">
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
