import React from "react";
import { Eye, Code } from "lucide-react";

const Card = ({ data, setToggle, setVideo }) => {
  return (
    <div className="bg-cardBGColor shadow-lg shadow-black/30 group w-full h-full cursor-pointer relative overflow-hidden border-0 rounded">
      <img
        src={data.image}
        alt=""
        className="w-full object-cover group-hover:blur-sm transition-all duration-300 delay-100"
      />
      <div className="px-4 pt-3 pb-1 absolute -bottom-[100%] w-full bg-cardBGColor/90 group-hover:bottom-0 transition-all duration-300">
        <h2 className="text-white text-base sm:text-lg font-semibold text-center">
          {data.name}
        </h2>
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-3">
          {data.tags.map((tag, i) => {
            return (
              <span className="text-sm font-medium text-white/70" key={i}>
                {tag},
              </span>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex items-center justify-between mt-4 pt-1 border-t border-gray-500">
          {data.link ? (
            <a
              href={data.link}
              target="_blank"
              className="flex gap-1 items-center text-sm font-medium text-white uppercase hover:text-textOrange transition-all duration-300 py-3 px-3"
            >
              <Eye size={16} />
              VIEW
            </a>
          ) : data.video !== "" ? (
            <div
              className="flex gap-1 items-center text-sm font-medium text-white uppercase hover:text-textOrange transition-all duration-300 py-3 px-3"
              onClick={() => setToggle(true) & setVideo(data.video)}
            >
              <Eye size={16} />
              VIEW
            </div>
          ) : (
            ""
          )}
          <a
            href={data.github}
            target="_blank"
            className="flex gap-1 items-center text-sm font-medium text-white uppercase hover:text-textOrange transition-all duration-300 py-3 px-3"
          >
            Code
            <Code size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
