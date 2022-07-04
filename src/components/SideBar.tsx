import { useContext } from 'react';
import { SlugContext } from '../Contexts/SlugContext';
import { SideBarContext } from "../Contexts/sideBarContext";
import { useGetLessonsQuery } from '../graphql/generated'
import { Lesson } from "./Lesson";

export function SideBar() {
    const { data } = useGetLessonsQuery()
    const { slug } = useContext(SlugContext)

    return (
        <SideBarContext.Consumer>
            {({isSideBarOpen}) => (
                <aside className={`w-[348px] lg:visible ${!isSideBarOpen ? 'lg:block hidden' : 'visible absolute z-50 min-w-full min-h-screen'} bg-gray-700 p-6 border-l border-gray-600`}>
                    <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                        Cronograma de aulas
                    </span>

                    <div className="flex flex-col gap-8">
                        {data?.lessons.map(lesson => {
                            return (
                                <Lesson
                                    key={lesson.id}
                                    title={lesson.title}
                                    isSelected={slug === lesson.slug ? true : false}
                                    slug={lesson.slug!}
                                    availableAt={new Date(lesson.availableAt)}
                                    type={lesson.lessonType}
                                />
                            )
                        })}
                    </div>
                </aside>
                )
            }
        </SideBarContext.Consumer>
    )
}