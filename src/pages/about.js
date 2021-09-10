// Step 1: Import React
import * as React from 'react'
import MLayout from "../components/m-layout";

// Step 2: Define your component
const AboutPage = () => {
    return (
        <MLayout pageTitle={"About me"}>
            <div className="py-6 min-h-screen flex flex-col">
                <div className="flex-grow bg-gray-100 flex items-center">
                    <div
                        className="container mx-auto max-w-sm bg-white rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-500">
                        <div className="flex items-center justify-between px-4">
                            <div className="flex justify-between items-center py-4">
                                <img className="w-12 rounded-full"
                                     src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg"
                                     alt="Alex"/>
                                <div className="ml-3">
                                    <h1 className="text-xl font-bold text-gray-800 cursor-pointer">Mauricio Aznar</h1>
                                    <p className="text-sm text-gray-800 hover:underline cursor-pointer">#Publicado hace
                                        2 horas</p>
                                </div>
                            </div>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1527112862739-c3b9466d902e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=966&q=80"
                            alt=""/>
                        <div className="p-6">
                            <h1 className="text-3xl font-bold text-gray-800 cursor-pointer ">Flores</h1>
                            <h2 className="text-xl text-gray-800 font-semibold">by Mauricio Aznar</h2>
                            <p className="text-lg font font-thin">Lorem ipsum carrots, enhanced undergraduate developer,
                                but they do occaecat time and vitality, Lorem ipsum carrots,</p>
                        </div>
                    </div>
                </div>
            </div>
        </MLayout>
    )
}

// Step 3: Export your component
export default AboutPage