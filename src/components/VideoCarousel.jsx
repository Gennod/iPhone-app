import { useRef } from "react";
import { highlightsSlides } from "../constants";
import { useState } from "react";

export default function VideoCarousel() {
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);

    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        lastVideo: false,
        isPlaying: false
    })

    return (
        <>
            <div className="flex items-center">
                {highlightsSlides.map((list, listIndex) => (
                    <div key={list.id} id="slider" className="sm:pr-20 pr-10">
                        <div className="video-carousel_container">
                            <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                                <video
                                    id="video"
                                    playsInline={true}
                                    preload="auto"
                                    muted
                                >
                                    <source src={list.video} type="video/mp4" />
                                </video>
                            </div>
                            <div className="absolute top-12 left-[5%] z-10">
                                {list.textLists.map((text) => (
                                    <p key={text} className="md:text-2xl text-xl font-medium">{text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}