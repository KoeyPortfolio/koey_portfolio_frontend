import React from "react";

export default function Introduction() {
  return (
    <>
      <div className="flex gap-10 items-center">
        <img className="w-50 h-50 object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="프로필 이미지" />
        <div className="bg-indigo-50 p-5 rounded-2xl">
          <p className="text-xl/12">
            <b>"</b>안녕 날 소개하지 <br />
            내 이름은 김하온 직업은 트래블러 <br />
            취미는 타이치, 메디테이션, 독서, 영화시청<b>"</b>
          </p>
        </div>
      </div>
    </>
  );
}