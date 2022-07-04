import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning, WhatsappLogo } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";
import { useGetLessonBySlugQuery } from '../graphql/generated'  

import '@vime/core/themes/default.css'

interface VideoProps {
    lessonSlug: string;
}

export function Video(props: VideoProps) {
    const { data } = useGetLessonBySlugQuery({
        variables: {
          slug: props.lessonSlug
        }
      })

    if (!data) {
        return (
            <div className="flex-1 text-center">Carregando...</div>
        )
    }

    return (
        <div className="flex-1">
            <div className="flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson!.videoId}/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 mx-auto md:flex-row flex-col max-w-[1100px]">
                <div className="flex flex-col md:flex-row md:items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            {data.lesson!.title}
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            {data.lesson!.description}
                        </p>

                        <div className="flex items-center gap-5 mt-6">
                            <img
                            className="w-16 h-16 rounded-full border-2 border-blue-500"
                            src={data.lesson!.teacher!.avatarURL} 
                            alt="Teacher Avatar" 
                            />

                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">{data.lesson!.teacher!.name}</strong>
                                <span className="text-gray-200 text-sm block">{data.lesson!.teacher!.bio}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="#" className="p-4 text-sm bg-blue-800 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-900 transition-colors">
                            <WhatsappLogo size={24}/>
                            Tire suas dúvidas
                        </a>

                        <a href="#" className="p-4 text-sm flex items-center rounded font-bold uppercase gap-2 justify-center border border-blue-800 hover:bg-blue-800 hover:text-gray-900 transition-colors">
                            <Lightning size={24}/>
                            Acesse o desafio
                        </a>
                    </div>
                </div>

                <div className="gap-8 mt-20 grid grid-cols-1 md:grid-cols-2">
                    <a href="" className="bg-gray-700 w-[85vw] sm:w-auto rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-blue-800 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Material Complementar
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelelar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>
                        </div>
                    </a>

                    <a href="" className="bg-gray-700 w-[85vw] sm:w-auto rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-blue-800 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />
                        </div>
                        <div className="py-6 leading-relaxed">
                            <strong className="text-2xl">
                                Descritivo das Aulas
                            </strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe o descritivo das aulas para entender mais sobre o caminho que você vai traçar
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight size={24}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}