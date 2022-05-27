import axios from "axios";
import React from "react";

const Posts = ({ entriesData }) => {
  return (
    <div>
      <h1>Posts:{entriesData.length}</h1>
      {entriesData.map((entry) => (
        <div key={entry.id}>
          <h4>{entry.title}</h4>
          <p>{entry.body}</p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await axios("http://localhost:3000/api/entries");
  const entriesData = await res.data.entriesData;
  return {
    props: { entriesData },
    revalidate: 10,
  };
};

export default Posts;
