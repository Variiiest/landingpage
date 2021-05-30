import React, { Component } from 'react'

export class HomePage extends Component {
    render() {
        return (
            <div>
                 <style dangerouslySetInnerHTML={{__html: "\n\n  .shadow-g:hover{\n    \n  box-shadow:5px 5px 50px 5px green;\n\n  }\n\n\n  " }} />
        <header className="text-gray-400 font-bold body-font bg-black">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-cente max-w-7xl">
            <a href="#_" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <span className="ml-3 text-2xl text-green-500">.uicomp</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg justify-center">
              <a href="#_" className="mr-10 hover:text-gray-300">Categories</a>
              <a href="#_" className="mr-10 hover:text-gray-300">Services</a>
              <a href="#_" className="mr-10 hover:text-gray-300">Terms</a>
            </nav>
            <button className="text-white inline-flex items-center  px-8 py-4 text-base font-bold leading-6 bg-green-700 shadow-g border border-transparent md:w-auto hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 rounded-full">Try it for free
            </button>
          </div>
        </header>
        <section className="text-green-400 body-font bg-black">
          <div className="container mx-auto flex px-8 py-24 md:flex-row flex-col items-center sm:p-10">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-green-400">
                We are solving your <span className="text-white">project-based problems</span>
              </h1>
              <p className="leading-relaxed  text-lg text-gray-400">Don't feel confident to get started with your project ,</p>
              <p className="mb-8 leading-relaxed  text-lg text-gray-400"> we are here to solve this problem .Get a mentor and
                project and complete within a time and collaborate with other users.</p>
              <div className="flex justify-center">
                <button className="text-white inline-flex items-center  px-8 py-4 text-base font-bold leading-6 bg-green-700 shadow-g border border-transparent md:w-auto hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 rounded-full">PROJECTS</button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img className="object-cover object-center" alt="hero" src="https://ik.imagekit.io/vpa3fwqdnd/Components/landing.09fa1de1_jirxji2h9.svg" />
            </div>
          </div>
        </section>
        <section className="text-gray-100 body-font font-bold bg-black">
          <div className="container mx-auto flex px-5 pb-24 items-center justify-center flex-col">
            <div className="lg:w-5/6 mx-auto mb-6">
              <div className="rounded-lg h-64 overflow-hidden sm:h-screen">
                <img alt="content" className="object-conver object-center h-full w-full" src="https://images.unsplash.com/photo-1621109493291-ec75b9930231?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" />
              </div>
            </div>
            <div className="text-center lg:w-2/3 w-full">
              <div className="flex justify-center">
                <button className="inline-flex shadow-g text-gray-100 bg-green-700 border-0 py-3 px-8 focus:outline-none hover:bg-green-400 rounded-full text-lg">See Demo</button>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-400 body-font bg-black">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-wrap w-full mb-10 flex-col p-4 sm:p-10">
              <h1 className="sm:text-5xl text-3xl title-font mb-2 text-white">Discover + create unlimited 
                <span className="relative mt-2 mb-2 text-green-500 md:inline-block">
                  dummy text of the printing
                </span></h1>
            </div>
            <div className="flex flex-wrap">
              <div className=" md:w-1/2 sm:p-4 items-center justify-center">
                <div className="p-4">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-xl shadow-xl bg-white bg-opacity-10 text-green-400 mb-4">
                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" /></svg>
                  </div>
                  <h2 className="text-3xl text-white title-font mb-4 mt-4">Lorem Ipsum</h2>
                  <p className="leading-relaxed text-xl tracking-tight">Nam  hendrerit tortor. Aenean a nunc eget lectus posuere interdum. Donec non dui ultrices, accumsan mi at, scelerisque lorem. Fusce imperdiet libero sed mollis malesuada.</p>
                </div>
              </div>
              <div className=" md:w-1/2 sm:p-4 items-center justify-center">
                <div className="p-4">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-xl shadow-xl bg-white bg-opacity-10 text-green-400 mb-4">
                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" /></svg>
                  </div>
                  <h2 className="text-3xl text-white title-font mb-4 mt-4">Lorem Ipsum</h2>
                  <p className="leading-relaxed text-xl tracking-tight">Nam  hendrerit tortor. Aenean a nunc eget lectus posuere interdum. Donec non dui ultrices, accumsan mi at, scelerisque lorem. Fusce imperdiet libero sed mollis malesuada.</p>
                </div>
              </div>
              <div className=" md:w-1/2 sm:p-4 items-center justify-center">
                <div className="p-4">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-xl shadow-xl bg-white bg-opacity-10 text-green-400 mb-4">
                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 
                  </div>
                  <h2 className="text-3xl text-white title-font mb-4 mt-4">Lorem Ipsum</h2>
                  <p className="leading-relaxed text-xl tracking-tight">Nam  hendrerit tortor. Aenean a nunc eget lectus posuere interdum. Donec non dui ultrices, accumsan mi at, scelerisque lorem. Fusce imperdiet libero sed mollis malesuada.</p>
                </div>
              </div>
              <div className=" md:w-1/2 sm:p-4 items-center justify-center">
                <div className="p-4">
                  <div className="w-20 h-20 inline-flex items-center justify-center rounded-xl shadow-xl bg-white bg-opacity-10 text-green-400 mb-4">
                    <svg className="w-14 h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg> 
                  </div>
                  <h2 className="text-3xl text-white title-font mb-4 mt-4">Lorem Ipsum</h2>
                  <p className="leading-relaxed text-xl tracking-tight">Nam  hendrerit tortor. Aenean a nunc eget lectus posuere interdum. Donec non dui ultrices, accumsan mi at, scelerisque lorem. Fusce imperdiet libero sed mollis malesuada.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="text-gray-400 body-font bg-black">
          <div className="container px-5 pt-24 mx-auto flex flex-wrap flex-col">
            <div className="flex mx-auto flex-wrap">
              <a href="#_" className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start  title-font font-medium bg-white bg-opacity-10 inline-flex items-center leading-none  text-green-400 ounded-t">
                For designers
              </a>
              <a href="#_" className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start  title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-200 ">
                For startups
              </a>
              <a href="#_" className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start  title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-200">
                For Freelancers
              </a>
            </div>
          </div>
        </section>
        <section className="text-gray-400 body-font bg-black bg-opacity-90">
          <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-14">
            <div className="flex flex-col items-start w-full pt-0 mb-16 text-left lg:flex-grow md:w-1/2 xl:mr-20 md:pr-24 md:mb-0">
              <h1 className="mb-8 text-3xl  tracking-tighter text-left text-white sm:text-4xl title-font">
                Lorem Ipsum is simply dummy text of the printing.
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-left tracking-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              <p className="flex items-center mb-6 hover:opacity-80 text-white"> <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6  bg-green-400 mr-2 rounded-full">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </span>
                Lorem Ipsum is simply dummy text of the printing</p>
              <p className="flex items-center mb-6 hover:opacity-80"> <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 bg-green-400 rounded-full">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </span>
                Lorem Ipsum is simply dummy text of the printing</p>
              <p className="flex items-center mb-6 hover:opacity-80"> <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full bg-green-400">
                  <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" />
                  </svg>
                </span>
                Lorem Ipsum is simply dummy text of the printing</p>
            </div>
            <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
              <img className="object-cover object-center rounded-lg" alt="hero" src="https://ik.imagekit.io/vpa3fwqdnd/Components/contact_n8VSUzNXy.svg" />
            </div>
          </div>
        </section>
        <section className="text-gray-400 body-font overflow-hidden bg-black">
          <div className="container px-5 py-24 mx-auto max-w-3xl">
            <div className="flex flex-col text-center w-full mb-10">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Pricing</h1>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/2 w-full">
                <div className="h-full p-6 flex flex-col relative overflow-hidden hover:shadow-xl hover:bg-white hover:bg-opacity-20  rounded transition transform hover:translate-y-4 ease-linear duration-300">
                  <h2 className="text-sm tracking-widest title-font mb-1 font-bold text-green-400">Small</h2>
                  <h1 className="text-3xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    Free
                  </h1>
                  <p className="flex items-center  mb-2">
                    <span className="w-8 h-8 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>Vexillologist pitchfork
                  </p>
                  <p className="flex items-center  mb-2">
                    <span className="w-8 h-8 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>Tumeric plaid portland
                  </p>
                  <p className="flex items-center  mb-2">
                    <span className="w-8 h-8 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>Hexagon neutra unicorn
                  </p>
                  <p className="flex items-center  mb-2">
                    <span className="w-8 h-8 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>Vexillologist pitchfork
                  </p>
                  <p className="flex items-center  mb-6">
                    <span className="w-8 h-8 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>Mixtape chillwave tumeric
                  </p>
                </div>
              </div>
              <div className="p-4 md:w-1/2 w-full  mx-auto">
                <div className="h-full mt-4 p-4 bg-white bg-opacity-10 hover:bg-opacity-20 hover:shadow-xl rounded transition transform hover:translate-y-4 ease-linear duration-300 sm:scale-110 flex flex-col relative overflow-hidden">
                  <h2 className="text-sm tracking-widest title-font mb-1 font-bold text-green-400">Pro</h2>
                  <h1 className="text-3xl text-green-400 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                    <span>$56</span>
                    <span className="text-lg ml-1 font-normal">/mo</span>
                  </h1>
                  <p className="flex items-center  mb-2">
                    <span className="w-8 h-8 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>Vexillologist pitchfork
                  </p>
                  <p className="flex items-center  mb-2">
                    <span className="w-8 h-8 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>Tumeric plaid portland
                  </p>
                  <p className="flex items-center  mb-2">
                    <span className="w-8 h-8 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>Hexagon neutra unicorn
                  </p>
                  <p className="flex items-center  mb-2">
                    <span className="w-8 h-8 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>Vexillologist pitchfork
                  </p>
                  <p className="flex items-center ">
                    <span className="w-8 h-8 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="2.5" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>Mixtape chillwave tumeric
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
            </div>
        )
    }
}

export default HomePage
