import Image from "next/image";
import { H2, H5, P } from "./typography";

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
    <>
      <div className="flex flex-col items-center justify-center mt-20">
        <H2 className="font-medium text-center">
          Why Customers
          <span className="font-kaushan"> love </span>
          <br />
          working with us
        </H2>
        <div className="mt-8 max-w-2xl flex items-center mx-auto px-4">
          <P className="text-center">
            Hear directly from customers about their experiences and how webdone
            has made a difference.
          </P>
        </div>
      </div>
      <div className="min-h-screen mt-12">
        <div className="mx-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex-1 flex flex-col gap-4">
                {column.map((post) => (
                  <div
                    key={post.id}
                    className="bg-(--review-card-background) rounded-lg p-4 border"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        width={48}
                        height={48}
                        src={post.avatar}
                        alt={post.name}
                        className="rounded-full shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                      />
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-1">
                          <H5>
                            {post.name}
                          </H5>
                        </div>
                        <div className="flex items-center gap-2 text-[18px] text-[#A1A1AA]">
                          <span>{post.handle}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[16px] text-[#A1A1AA]">
                          <span>Saas-maker •</span>
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
    </>
  );
}
