"use client";

import { useEffect, useState } from "react";
import User from "./User";
import { UserData } from "../types";

export default function UserList() {
  const USER_API_BASE_URL = "http://localhost:3001/users";
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(USER_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const tableHeaderStyles =
    "text-left font-medium text-gray-500 uppercase tracking wide py-3 px-6";

  return (
    <div className="mx-10 my-8 overflow-visible">
      <div
        className="flex border border-solid border-gray-300"
        style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)" }}
      >
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className={tableHeaderStyles}>First Name</th>
              <th className={tableHeaderStyles}>Last Name</th>
              <th className={tableHeaderStyles}>Address</th>
              <th className={tableHeaderStyles}>Date of Birth</th>
              <th className={tableHeaderStyles}>Phone Number</th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {users?.map((user) => (
                <User user={user} key={user.id} />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
