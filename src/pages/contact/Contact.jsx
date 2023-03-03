import React from "react";

const handleSubmit = (e) => {
  e.preventDefault();
};

export const Contact = () => {
  return (
    <div className={"text-center"}>
      <h2>Support</h2>
      <form onSubmit={""}>
        <input type="text" className="form-control" placeholder="Name" />
        <input type="text" className="form-control" placeholder="Lastname" />
        <input type="text" className="form-control" placeholder="Email" />
        <textarea
          className="form-control"
          rows={10}
          placeholder="Message"
        ></textarea>
        <button type="submit" className={"btn btn-primary m-1"}>
          Send
        </button>
      </form>
    </div>
  );
};
