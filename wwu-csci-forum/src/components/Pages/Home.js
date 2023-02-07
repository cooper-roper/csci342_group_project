import React from 'react';
import Navigation from '../Navigation/Navigation';
import LeftBar from '../LeftBar/LeftBar';
import ThreadList from '../ThreadList/ThreadList'

const post = {
  title: 'My first post',
  author: 'John Doe',
  content: 'This is my text body sda;kjfh asdkfj asdlkf gasdlkfjg hasdfkjalsd flkjadsfhasdjkfhasd hflaskjdh fhlasjdkf',
  replies: {}

};

const posts = [post, post, post, post, post, post];


export default function home() {
  return (
    <>
      <Navigation/>
      <LeftBar/>
      <ThreadList threads={posts}/>
    </>
  )
}

