import React from 'react'

export default function Faqs() {
  const [expand, setExpand] = React.useState(false)
  const expandclass = expand ? 'display' : 'hidden'
  const answerclass = `${expandclass}`

  return (
    <div className="faqs mb-[8rem] smm:mt-[35px]">
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl px-6 py-10 smm:pt-[4rem]">
          <h1 className="text-center text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
            Frequently asked questions
          </h1>

          <div className="mt-12 space-y-8">
            <div className="rounded-lg border-2 border-gray-100 dark:border-gray-700">
              <button
                className="flex w-full items-center justify-between p-8"
                onClick={() => setExpand(!expand)}
              >
                <h1 className=" font-semibold text-gray-700 dark:text-white">
                  01. Can I Find the right information faster??
                </h1>
                {expand ? (
                  <span className="close-treact-popup rounded-full bg-gray-200 text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  </span>
                ) : (
                  <span className="close-treact-popup rounded-full bg-blue-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                )}
              </button>

              <hr className="border-gray-200 dark:border-gray-700" />
              <div className={answerclass}>
                <p className="answer  p-8 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis,
                  fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere
                  dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
              </div>
            </div>

            <div className="rounded-lg border-2 border-gray-100 dark:border-gray-700">
              <button
                className="flex w-full items-center justify-between p-8"
                onClick={() => setExpand(!expand)}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  02. How to share feature demos and ideas?
                </h1>

                <span className="close-treact-popup rounded-full bg-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
              <hr className="border-gray-200 dark:border-gray-700" />

              <div className={answerclass}>
                <p className="answer  p-8 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis,
                  fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere
                  dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
              </div>
            </div>

            <div className="rounded-lg border-2 border-gray-100 dark:border-gray-700">
              <button
                className="flex w-full items-center justify-between p-8"
                onClick={() => setExpand(!expand)}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  03. Do i need a referral?
                </h1>

                <span className="close-treact-popup rounded-full bg-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
              <hr className="border-gray-200 dark:border-gray-700" />

              <div className={answerclass}>
                <p className="answer  p-8 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis,
                  fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere
                  dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
              </div>
            </div>

            <div className="rounded-lg border-2 border-gray-100 dark:border-gray-700">
              <button
                className="flex w-full items-center justify-between p-8"
                onClick={() => setExpand(!expand)}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  04. How to get insights from users?
                </h1>

                <span className="close-treact-popup rounded-full bg-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
              <hr className="border-gray-200 dark:border-gray-700" />

              <div className={answerclass}>
                <p className="answer  p-8 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis,
                  fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere
                  dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
              </div>
            </div>

            <div className="rounded-lg border-2 border-gray-100 dark:border-gray-700">
              <button
                className="flex w-full items-center justify-between p-8"
                onClick={() => setExpand(!expand)}
              >
                <h1 className="font-semibold text-gray-700 dark:text-white">
                  05. Can I develop my website without code?
                </h1>

                <span className="close-treact-popup rounded-full bg-blue-500 text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </button>
              <hr className="border-gray-200 dark:border-gray-700" />

              <div className={answerclass}>
                <p className="answer  p-8 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis,
                  fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere
                  dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
