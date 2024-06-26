"use client"
// import React, { useEffect, useContext, useState } from 'react'
// import Link from 'next/link';
// import { useRouter, usePathname } from "next/navigation";

// import "./Sidebar.css";
// import logo from "../../../public/imgages/LOGO.png"
// import Image from 'next/image';
// import { UserContext } from "../../context";

// const SideNavbar = () => {
//   const router = useRouter();


//   const pathname = usePathname();
//   const [state, setState] = useContext(UserContext);
//   const [name, setName] = useState("");
//   const [image, setImage] = useState({});

//   const logout = () => {
//     router.push("/login");

//     window.localStorage.removeItem("auth");

//     setState({ user: {}, token: "" });
//   };
//   useEffect(() => {
//     if (state && state.user) {
//       setName(state.user.name)
//       setImage(state.user.image)

//     } else {
//       router.push("/login")
//     }
//   }, [state, router]);
//   const isActive = (path) => {
//     return pathname === path;
//   };

//   return (
//     <>
//     <div>

//       <div className='sidebar'>
//         <div className='img-container text-center'>
//           {image ?
//             (
//               <>
//                 <Image src={image.url} width={30} height={30} alt="admin avatar" />

//               </>
//             ) : (
//               <>
//                 <Image src={logo} width={30} height={30} alt="admin avatar" />

//               </>
//             )
//           }
//         </div>
//         <h6 className=' text-center'>{name}</h6>

//         <p className="text-center">Dhaka, Banglaseh</p>
//         <div className='sidebar-container'>
//           <div className={`sidebar-item ${isActive('/dashbord') ? 'active' : ''}`}>
//             <Link href="/dashbord">Home</Link>
//           </div>
//           <div className={`sidebar-item ${isActive('/dashbord/profile') ? 'active' : ''}`}>
//             <Link href="/dashbord/profile">Profile</Link>
//           </div>
//           <div className={`sidebar-item ${isActive('/dashbord/classes') ? 'active' : ''}`}>
//             <Link href="/dashbord/classes">My Classes</Link>
//           </div>
//           <div className={`sidebar-item ${isActive('/dashbord/blog') ? 'active' : ''}`}>
//             <Link href="/dashbord/blog">Create Blog</Link>
//           </div>
//           <div className={`sidebar-item ${isActive('/dashbord/exam') ? 'active' : ''}`}>
//             <Link href="/dashbord/exam">Exam</Link>
//           </div>
//           <div className={`sidebar-item ${isActive('/dashbord/audioleson') ? 'active' : ''}`}>
//             <Link href="/dashbord/audioleson">Audio Leson</Link>
//           </div>

//           {/* <div className={`sidebar-item ${isActive('/dashbord/audio') ? 'active' : ''}`}>
//             <Link href="/dashbord/audio"></Link>
//           </div>
//           <div className={`sidebar-item ${isActive('/dashbord/address') ? 'active' : ''}`}>
//             <Link href="/dashbord/address"></Link>
//           </div> */}
//           {/* <div className={`sidebar-item ${isActive('/dashbord/account') ? 'active' : ''}`}>
//             <Link href="/dashbord/account">Lesson</Link>
//           </div> */}
//           <div className={`sidebar-item ${isActive('/dashbord/reviewcreate') ? 'active' : ''}`}>
//             <Link href="/dashbord/reviewcreate">Give Us Your FeedBack</Link>
//           </div>

//           <div className="sidebar-item ">
//             <a onClick={logout}>
//               Logout
//             </a>
//           </div>
//         </div>
//       </div>
//       </div>

//     </>
//   );
// }

// export default SideNavbar;



// import React, { useEffect, useContext, useState } from 'react';
// import Link from 'next/link';
// import { useRouter, usePathname } from "next/navigation";
// import "./Sidebar.css";
// import logo from "../../../public/imgages/LOGO.png";
// import Image from 'next/image';
// import { UserContext } from "../../context";

// const SideNavbar = () => {
//     const router = useRouter();
//     const pathname = usePathname();
//     const [state, setState] = useContext(UserContext);
//     const [name, setName] = useState("");
//     const [image, setImage] = useState({});
//     const [isCollapsed, setIsCollapsed] = useState(true);
//     const [showCollapseButton, setShowCollapseButton] = useState(false);

//     const toggleCollapse = () => {
//         setIsCollapsed(!isCollapsed);
//     };

//     const logout = () => {
//         router.push("/login");
//         window.localStorage.removeItem("auth");
//         setState({ user: {}, token: "" });
//     };

//     useEffect(() => {
//         if (state && state.user) {
//             setName(state.user.name);
//             setImage(state.user.image);
//         } else {
//             router.push("/login");
//         }
//     }, [state, router]);

//     useEffect(() => {
//         const handleResize = () => {
//             setShowCollapseButton(window.innerWidth <= 720);
//             if (window.innerWidth > 720 && isCollapsed) {
//                 setIsCollapsed(true); // Collapse sidebar for larger screens
//             }
//         };

//         handleResize(); // Initial check

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [isCollapsed]);

//     const isActive = (path) => {
//         return pathname === path;
//     };

//     return (
//         <>
//             <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
//                 {showCollapseButton && (
//                     <button className="collapse-button" onClick={toggleCollapse}>
//                         {isCollapsed ? '☰' : '✖'} 
//                     </button>
//                 )}
//                 <div className="sideNav">
//                 <div className='img-container text-center'>
//                     {image ? <Image src={image.url} width={30} height={30} alt="admin avatar" />
//                         : <Image src={logo} width={30} height={30} alt="admin avatar" />}
//                 </div>
//                 <h6 className=' text-center'>{name}</h6>
//                 <p className="text-center">Dhaka, Banglaseh</p>
//                 <div className='sidebar-container'>
//                     <div className={`sidebar-item ${isActive('/dashboard') ? 'active' : ''}`}>
//                         <Link href="/dashboard">Home</Link>
//                     </div>
//                     {/* Other sidebar items */}
//                 </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// // export default SideNavbar;
// import React, { useEffect, useContext, useState } from 'react';
// import Link from 'next/link';
// import { useRouter, usePathname } from "next/navigation";
// import "./Sidebar.css";
// import logo from "../../../public/imgages/LOGO.png";
// import Image from 'next/image';
// import { UserContext } from "../../context";

// const SideNavbar = () => {
//     const router = useRouter();
//     const pathname = usePathname();
//     const [state, setState] = useContext(UserContext);
//     const [name, setName] = useState("");
//     const [image, setImage] = useState({});
//     const [isCollapsed, setIsCollapsed] = useState(true);
//     const [showCollapseButton, setShowCollapseButton] = useState(false);

//     const toggleCollapse = () => {
//         setIsCollapsed(!isCollapsed);
//         console.log("test"); // Log "test" to console when ☰ button is clicked
        
//     };

//     const logout = () => {
//         router.push("/login");
//         window.localStorage.removeItem("auth");
//         setState({ user: {}, token: "" });
//     };

//     useEffect(() => {
//         if (state && state.user) {
//             setName(state.user.name);
//             setImage(state.user.image);
//         } else {
//             router.push("/login");
//         }
//     }, [state, router]);

//     useEffect(() => {
//         const handleResize = () => {
//             setShowCollapseButton(window.innerWidth <= 720);
//             if (window.innerWidth > 720 && isCollapsed) {
//                 setIsCollapsed(true); // Collapse sidebar for larger screens
//             }
//         };

//         handleResize(); // Initial check

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, [isCollapsed]);

//     const isActive = (path) => {
//         return pathname === path;
//     };

//     return (
//         <>
//             <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
//                 {showCollapseButton && (
//                     <button className="collapse-button" onClick={toggleCollapse}>
//                         ☰
//                     </button>
//                 )}
//                 <div className="sideNav">
//                     <div className='img-container text-center'>
//                         {image ? <Image src={image.url} width={30} height={30} alt="admin avatar" />
//                             : <Image src={logo} width={30} height={30} alt="admin avatar" />}
//                     </div>
//                     <h6 className=' text-center'>{name}</h6>
//                     <p className="text-center">Dhaka, Banglaseh</p>
//                     <div className='sidebar-container'>
//                         <div className={`sidebar-item ${isActive('/dashboard') ? 'active' : ''}`}>
//                             <Link href="/dashboard">Home</Link>
//                         </div>
//                         {/* Other sidebar items */}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default SideNavbar;
import React, { useEffect, useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from "next/navigation";
import "./Sidebar.css";
import logo from "../../../public/imgages/LOGO.png";
import Image from 'next/image';
import { UserContext } from "../../context";

const SideNavbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [state, setState] = useContext(UserContext);
    const [name, setName] = useState("");
    const [image, setImage] = useState({});
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [showCollapseButton, setShowCollapseButton] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const logout = () => {
        router.push("/login");
        window.localStorage.removeItem("auth");
        setState({ user: {}, token: "" });
    };

    useEffect(() => {
        if (state && state.user) {
            setName(state.user.name);
            setImage(state.user.image);
        } else {
            router.push("/login");
        }
    }, [state, router]);

    useEffect(() => {
        const handleResize = () => {
            setShowCollapseButton(window.innerWidth <= 720);
            if (window.innerWidth > 720 && isCollapsed) {
                setIsCollapsed(true); // Collapse sidebar for larger screens
            }
        };

        handleResize(); // Initial check

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isCollapsed]);

    const isActive = (path) => {
        return pathname === path;
    };

    return (
        <>
            <div className={`${isCollapsed ? 'collapsed' : ''}`}>
                {showCollapseButton && (
                    <button className="collapse-button" onClick={toggleCollapse}>
                        ☰
                    </button>
                )}
                {isCollapsed && (
                    <div className="sidebar sideNav">
                        <div className='img-container text-center'>
                            {image ? <Image src={image.url} width={30} height={30} alt="admin avatar" />
                                : <Image src={logo} width={30} height={30} alt="admin avatar" />}
                        </div>
                        <h6 className=' text-center'>{name}</h6>
                        <p className="text-center">Dhaka, Banglaseh</p>
                        <div className='sidebar-container'>
                            <div className={`sidebar-item ${isActive('/dashboard') ? 'active' : ''}`}>
                                <Link href="/dashboard">Home</Link>
                            </div>
                            {/* Other sidebar items */}
                            <div className={`sidebar-item ${isActive('/dashbord/profile') ? 'active' : ''}`}>
            <Link href="/dashbord/profile">Profile</Link>
          </div>
          <div className={`sidebar-item ${isActive('/dashbord/classes') ? 'active' : ''}`}>
            <Link href="/dashbord/classes">My Classes</Link>
          </div>
          <div className={`sidebar-item ${isActive('/dashbord/blog') ? 'active' : ''}`}>
            <Link href="/dashbord/blog">Create Blog</Link>
          </div>
          <div className={`sidebar-item ${isActive('/dashbord/exam') ? 'active' : ''}`}>
            <Link href="/dashbord/exam">Exam</Link>
          </div>
          <div className={`sidebar-item ${isActive('/dashbord/audioleson') ? 'active' : ''}`}>
            <Link href="/dashbord/audioleson">Audio Leson</Link>
          </div>

          {/* <div className={`sidebar-item ${isActive('/dashbord/audio') ? 'active' : ''}`}>
            <Link href="/dashbord/audio"></Link>
          </div>
          <div className={`sidebar-item ${isActive('/dashbord/address') ? 'active' : ''}`}>
            <Link href="/dashbord/address"></Link>
          </div> */}
          {/* <div className={`sidebar-item ${isActive('/dashbord/account') ? 'active' : ''}`}>
            <Link href="/dashbord/account">Lesson</Link>
          </div> */}
          <div className={`sidebar-item ${isActive('/dashbord/reviewcreate') ? 'active' : ''}`}>
            <Link href="/dashbord/reviewcreate">Give Us Your FeedBack</Link>
          </div>

          <div className="sidebar-item ">
            <a onClick={logout}>
              Logout
            </a>
          </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default SideNavbar;
