import React, { useState } from "react";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("react");

  const tabs = [
    { id: "react", label: "React", content: "⚛️ React is a JavaScript library for building user interfaces using components." },
    { id: "vue", label: "Vue", content: "🖖 Vue.js is a progressive framework for building modern web applications." },
    { id: "angular", label: "Angular", content: "🚀 Angular is a full-fledged TypeScript-based web application framework." },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 font-poppins">
      <div className="bg-white shadow-2xl rounded-2xl w-[90%] max-w-md p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">🗂️ Tech Tabs</h2>

        {/* Tabs Header */}
        <div className="flex justify-between mb-4 bg-gray-100 p-1 rounded-xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-1/3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        <div className="p-4 rounded-lg border border-gray-200 bg-gray-50 text-gray-700 text-sm leading-relaxed shadow-inner transition-all duration-500">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
