
function Card() {
    return (
        <div class="flex flex-col bg-blue-600 border shadow-sm rounded-xl p-4 md:p-5">
            <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                Card title
            </h3>
            <p class="mt-1 text-xs font-medium uppercase text-gray-500 dark:text-gray-500">
                Card subtitle
            </p>
            <p class="mt-2 text-gray-800 dark:text-gray-400">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
        </div>
    );
}

export default Card;