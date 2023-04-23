import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Editor() {

    const [value, setValue] = useState('');
  return (

<ReactQuill className=' w-80  sm:w-[60vw] bg-white   h-full text-black' theme="snow" value={value} onChange={setValue} />

    )
}


