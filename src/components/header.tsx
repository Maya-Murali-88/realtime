"use client";


export function Header() {
  return (
    <div className="flex flex-col items-center p-4 border-0 border-r border-t border-b rounded-t-md bg-white">
      <div className="flex flex-col items-center text-center">
        
              <h2 className="text-lg font-semibold text-pink-500">AI - Mamma</h2>
              <p className="text-sm text-[#09090B]">
                Your Parenting Assistant with Voice & Vision.
              </p>
        
        {/*<div className="flex flex-row items-center justify-between sm:justify-end space-x-2 mt-2 lg:mt-0">
          <div className="flex flex-row items-center space-x-2">
            <PresetSelector />
            <PresetSave />
            <PresetShare />
            <CodeViewer />
          </div>
        </div> */}
      </div>
    </div>
  );
}
