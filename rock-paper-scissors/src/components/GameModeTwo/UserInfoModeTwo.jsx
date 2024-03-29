import React from "react";

function UserInfoModeTwo({ user1, user2, setUser1, setUser2, setNamesOk }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user1 && user2) {
      setNamesOk(true);
    }
  };

  return (
    <>
      <div>
        <div className="row text-center">
          <div>
            <h4>Enter the names of the players !!!</h4>
          </div>
          <form>
            <div className="row">
              <div className="col-sm-6 mt-3 ">
                <label htmlFor="user1Input" className="form-label">
                  Player 1 Name :
                </label>
                <input
                  type="text"
                  className="form-control"
                  // value={user1}
                  onChange={(event) => setUser1(event.target.value)}
                />
              </div>
              <div className="col-sm-6 mt-3">
                <label htmlFor="user2Input" className="form-label">
                  Player 2 Name :
                </label>
                <input
                  type="text"
                  className="form-control"
                  // value={user2}
                  onChange={(event) => setUser2(event.target.value)}
                />
              </div>
              <div className="mt-5">
                <button
                  onClick={handleSubmit}
                  className="btn btn-outline-success"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserInfoModeTwo;
