import React from "react";

const icons: any = {
    'human': `
        <svg width="40" height="49" viewBox="0 0 40 49" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M20.5 23.5C26.5751 23.5 31.5 18.5751 31.5 12.5C31.5 6.42487 26.5751 1.5 20.5 1.5C14.4249 1.5 9.5 6.42487 9.5 12.5C9.5 18.5751 14.4249 23.5 20.5 23.5Z" stroke="black" stroke-width="2"/>
             <path d="M2 49V33C2 30.7909 3.79086 29 6 29H34C36.2091 29 38 30.7909 38 33V49" stroke="black" stroke-width="2"/>
        </svg>
    `,
    'departments': `
        <svg width="59" height="50" viewBox="0 0 59 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0556 31.102C16.0556 33.4137 14.2818 35.2041 12.1944 35.2041C10.107 35.2041 8.33334 33.4137 8.33334 31.102C8.33334 28.7904 10.107 27 12.1944 27C14.2818 27 16.0556 28.7904 16.0556 31.102Z" stroke="black" stroke-width="2"/>
            <path d="M5 46V41.8367C5 39.6276 6.79086 37.8367 9 37.8367H15C17.2091 37.8367 19 39.6276 19 41.8367V46" stroke="black" stroke-width="2"/>
            <path d="M33.0556 8.10204C33.0556 10.4137 31.2818 12.2041 29.1944 12.2041C27.107 12.2041 25.3333 10.4137 25.3333 8.10204C25.3333 5.79041 27.107 4 29.1944 4C31.2818 4 33.0556 5.79041 33.0556 8.10204Z" stroke="black" stroke-width="2"/>
            <path d="M22 23V18.8367C22 16.6276 23.7909 14.8367 26 14.8367H32C34.2091 14.8367 36 16.6276 36 18.8367V23" stroke="black" stroke-width="2"/>
            <path d="M51.0556 31.102C51.0556 33.4137 49.2818 35.2041 47.1944 35.2041C45.107 35.2041 43.3333 33.4137 43.3333 31.102C43.3333 28.7904 45.107 27 47.1944 27C49.2818 27 51.0556 28.7904 51.0556 31.102Z" stroke="black" stroke-width="2"/>
            <path d="M40 46V41.8367C40 39.6276 41.7909 37.8367 44 37.8367H50C52.2091 37.8367 54 39.6276 54 41.8367V46" stroke="black" stroke-width="2"/>
            <path d="M33.0556 31.102C33.0556 33.4137 31.2818 35.2041 29.1944 35.2041C27.107 35.2041 25.3333 33.4137 25.3333 31.102C25.3333 28.7904 27.107 27 29.1944 27C31.2818 27 33.0556 28.7904 33.0556 31.102Z" stroke="black" stroke-width="2"/>
            <path d="M22 46V41.8367C22 39.6276 23.7909 37.8367 26 37.8367H32C34.2091 37.8367 36 39.6276 36 41.8367V46" stroke="black" stroke-width="2"/>
            <rect x="1" y="1" width="57" height="48" rx="13" stroke="black" stroke-width="2"/>
            </svg>
    `,
    'tasks': `
        <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block; margin: 0 auto">
            <rect x="1" y="1" width="48" height="47" rx="2" stroke="black" stroke-width="2"/>
            <path d="M6 36.5L9 39L13 35" stroke="black" stroke-width="2"/>
            <path d="M6 8.5L9 11L13 7" stroke="black" stroke-width="2"/>
            <path d="M6 29.5L9 32L13 28" stroke="black" stroke-width="2"/>
            <path d="M6 22.5L9 25L13 21" stroke="black" stroke-width="2"/>
            <path d="M6 15.5L9 18L13 14" stroke="black" stroke-width="2"/>
            <line x1="17" y1="9" x2="39" y2="9" stroke="black" stroke-width="2"/>
            <line x1="17" y1="37" x2="39" y2="37" stroke="black" stroke-width="2"/>
            <line x1="17" y1="30" x2="39" y2="30" stroke="black" stroke-width="2"/>
            <line x1="17" y1="23" x2="39" y2="23" stroke="black" stroke-width="2"/>
            <line x1="17" y1="16" x2="39" y2="16" stroke="black" stroke-width="2"/>
        </svg>
    `,
    'applicants': `
      <svg width="71" height="49" viewBox="0 0 71 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="69" height="37" rx="1" stroke="black" stroke-width="2"/>
        <line x1="4" y1="6.5" x2="39" y2="6.5" stroke="black"/>
        <line x1="41" y1="6.5" x2="64" y2="6.5" stroke="black"/>
        <line x1="8" y1="11.5" x2="60" y2="11.5" stroke="black"/>
        <line x1="5" y1="16.5" x2="31" y2="16.5" stroke="black"/>
        <line x1="35" y1="16.5" x2="43" y2="16.5" stroke="black"/>
        <line x1="47" y1="16.5" x2="61" y2="16.5" stroke="black"/>
        <line x1="7" y1="23.5" x2="29" y2="23.5" stroke="black"/>
        <line x1="8" y1="29.5" x2="28" y2="29.5" stroke="black"/>
        <line x1="31" y1="29.5" x2="50" y2="29.5" stroke="black"/>
        <line x1="38" y1="23.5" x2="60" y2="23.5" stroke="black"/>
        <path d="M59.3166 37.9892L54.5081 46.8561L49.6894 38.0092L59.3166 37.9892Z" stroke="black" stroke-width="2"/>
     </svg>
    `
};

const IconComponent = ({name}: any) => {
    return (
        <span dangerouslySetInnerHTML={{__html: icons[name] || ''}}>
        </span>
    );
}

export default IconComponent;