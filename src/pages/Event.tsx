import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { Video } from "../components/Video";
import { SlugContext } from "../Contexts/SlugContext";
import { SideBarContext } from "../Contexts/sideBarContext";
import { useState } from "react";

export function Event() {
    const { slug } = useParams<{ slug: string }>()
    const [isSideBarOpen, setSideBarOpen] = useState(false)

    return (
        <div className="flex flex-col min-h-screen">
            <SideBarContext.Provider value={{
                isSideBarOpen,
                setSideBarOpen,
            }}>
            <Header />
                { slug 
                    ? 
                    <main className="flex flex-1">
                        <SlugContext.Provider value={{slug}}>
                            <Video lessonSlug={slug} /> 
                            <SideBar />
                        </SlugContext.Provider>
                    </main>
                    :
                    <main className="flex flex-1">
                        <div className="flex-1" />
                        <SideBar />
                    </main>
                }
            </SideBarContext.Provider>
        </div>
    )
}