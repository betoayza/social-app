import React from "react";

export const Contact = () => {
  return (
    <div className={"text-center"}>
      <h2>Support</h2>
      <form onSubmit={""}>
        <input type="text" className="form-control" placeholder="Name"/>
        <input type="text" className="form-control" placeholder="Lastname"/>
        <input type="text" className="form-control" placeholder="Email"/>
        <textarea className="form-control" rows={10} placeholder="Message"></textarea>
      </form>
    </div>
  );
};
