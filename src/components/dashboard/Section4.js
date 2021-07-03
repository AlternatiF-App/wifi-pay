import React from 'react'

export default function Section4() {
    return (
        <figure className="md:flex bg-gray-800 p-8 md:p-0 overflow-hidden">
            <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fc%2F7%2Fb%2F165763.jpg&f=1&nofb=1" alt="" width="384" height="512"/>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                <p className="text-lg font-semibold text-white">
                    Family-net is a network from indihome, easy to pay and easy to use. A great cheap network and can reach many
                    clients in Village.
                </p>
                </blockquote>
                <figcaption className="font-medium">
                <div className="text-white">
                    Ahmad Fanani
                </div>
                <div className="text-blue-300">
                    Web Developer, Indonesia
                </div>
                </figcaption>
            </div>
        </figure>
    )
}