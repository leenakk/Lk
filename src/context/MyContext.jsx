import React, { createContext, useState } from 'react';

const MyContext = createContext();

export default function MyContextProvider({ children }) {
    const [loader, setloader] = useState(false);
    const [PostForm, setPostForm] = useState(false)

    return (
        <MyContext.Provider value={{ loader, setloader, PostForm, setPostForm }}>
            {children}
        </MyContext.Provider>
    );
}

export { MyContext };
