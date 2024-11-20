// import React from "react";
// // import { DocSearch } from "@docsearch/react";
// import { Input } from "@material-tailwind/react";
 
// const APP_ID = "your-app-id";
// const INDEX_NAME = "your-index-name";
// const API_KEY = "your-algolia-api-key";
 
// export function AlgoliaSearch() {
//   return (
//     <div className="group relative">
//       <Input
//         type="email"
//         placeholder="Search"
//         className="focus:!border-t-gray-900 group-hover:border-2 group-hover:!border-gray-900"
//         labelProps={{
//           className: "hidden",
//         }}
//         readOnly
//       />
//       <div className="absolute top-[calc(50%-1px)] right-2.5 -translate-y-2/4">
//         <kbd className="rounded border border-blue-gray-100 bg-white px-1 pt-px pb-0 text-xs font-medium text-gray-900 shadow shadow-black/5">
//           <span className="mr-0.5 inline-block translate-y-[1.5px] text-base">
//             ⌘
//           </span>
//           K
//         </kbd>
//       </div>
//       <div className="absolute inset-0 w-full opacity-0">
//         {/* <DocSearch indexName={INDEX_NAME} apiKey={API_KEY} appId={APP_ID} /> */}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  Highlight,
} from "react-instantsearch-hooks-web";
import "tailwindcss/tailwind.css";

const searchClient = algoliasearch("M424A92SBV", "5649b36c5c7ec57392becf49b5877d30");

const SearchModal = ({ onClose, open }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-md ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="absolute inset-x-0 top-20 mx-auto w-[90%] max-w-xl bg-white shadow-lg rounded-lg p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          Close ✖
        </button>
        <InstantSearch searchClient={searchClient} indexName="your-index-name">
          {/* Configure Search */}
          <Configure hitsPerPage={5} />
          {/* Search Input */}
          <SearchBox
            className="mt-4 p-2 border border-gray-300 rounded w-full"
            placeholder="Type to search..."
          />
          {/* Search Results */}
          <div className="mt-4">
            <Hits hitComponent={Hit} />
          </div>
        </InstantSearch>
      </div>
    </div>
  );
};

// Single Search Result Item
const Hit = ({ hit }) => (
  <div className="border-b border-gray-300 py-2">
    <Highlight attribute="title" hit={hit} />
  </div>
);

export function AlgoliaSearch() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative">
      {/* Trigger Input */}
      <input
        type="text"
        placeholder="Search docs..."
        onClick={() => setIsModalOpen(true)}
        className="p-2 border rounded-md w-full"
        readOnly
      />
      {/* Modal */}
      <SearchModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
