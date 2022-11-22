import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllUsers = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("http://localhost:5000/api/v1/users").then((res) => res.json()),
  });

  const makeAdminHandler = (id) => {
    fetch(`http://localhost:5000/api/v1/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearrer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          toast.error("You have to right to make admin");
          return;
        }
        return res.json();
      })
      .then(({ data }) => {
        console.log(data);
        if (data.result.acknowledged && data.result.modifiedCount) {
          toast.success("Created admin successfully");
          refetch();
        }
      });
  };

  return (
    <div>
      <h3 className="text-3xl font-semibold mb-10">
        All Users {!isLoading && data.result}
      </h3>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              data.data.users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.userName}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role !== "admin" && (
                      <button
                        onClick={makeAdminHandler.bind(null, user._id)}
                        className="btn btn-xs btn-primary"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-xs">Delete</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
