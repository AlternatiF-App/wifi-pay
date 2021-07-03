import React from 'react'

export default function Section5() {
    return (
        <div className="relative bg-gray-900 px-5 py-1 overflow-hidden">
            <div className="p-4 w-auto">
                <h1 className="text-gray-50 text-center text-4xl">
                    Gallery
                </h1>
            </div>
            <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3 px-8 py-4">
                <div className="w-full grid grid-cols-3 grid-rows-3 gap-3">
                    <div className="relative col-span-3 row-span-2 md:col-span-2">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.urbanrealm.com%2Fimages%2Fbuildings%2Fbuilding_998.jpg&f=1&nofb=1" alt="" 
                            className="relative inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
                    </div>
                    <div className="relative md:block">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.architectureartdesigns.com%2Fwp-content%2Fuploads%2F2016%2F05%2FMeet-The-Levels-House-by-BAK-Architects-in-Argentina-12.jpg&f=1&nofb=1" alt="" 
                            className="relative inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
                    </div>
                    <div className="relative md:block">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.adsttc.com%2Fmedia%2Fimages%2F5433%2F4558%2Fc07a%2F8049%2Ff500%2F007b%2Flarge_jpg%2F20.jpg%3F1412646208&f=1&nofb=1" alt="" 
                            className="relative inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
                    </div>
                    <div className="relative md:block">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.288group.com%2Fwp-content%2Fuploads%2F2017%2F03%2F4453801505_c82b3ddc62_o.jpg&f=1&nofb=1" alt="" 
                            className="relative inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
                    </div>
                    <div className="relative md:block">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.architecturendesign.net%2Fwp-content%2Fuploads%2F2014%2F08%2FBeach-House-26-1.jpg&f=1&nofb=1" alt="" 
                            className="relative inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
                    </div>
                    <div className="relative md:block">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.henpartyvenues.co.uk%2Fself-catering%2Fpitmastonhouse-1482232359-1.jpg&f=1&nofb=1" alt="" 
                            className="relative inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}
