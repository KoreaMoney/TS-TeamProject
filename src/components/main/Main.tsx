import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      여기가 main입니다.
      <button>
        <Link to="/logout">로그아웃</Link>
      </button>
    </div>
  );
}
