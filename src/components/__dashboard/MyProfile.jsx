"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

const MyProfile = ({ user }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const currentUserName = user?.name;
    const newUserName = event.target.newUsername.value;
    const currentPassword = event.target.currentPassword.value;
    const newPassword = event.target.newPassword.value;

    try {
      const response = await fetch(`/api/admin`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentUserName,
          newUserName,
          currentPassword,
          newPassword,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      // If successful response
      const data = await response.json();

      // After update the profile signout the admin
      await signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_API_URL}` });

      toast.success(data?.message);
      setIsLoading(false);
      setIsUpdating(false);
    } catch (error) {
      console.error("Error:", error.message);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>
        <p className="text-3xl">
          <span className="font-bold">User Name:</span>{" "}
          <span>{user?.name}</span>
        </p>
        {!isUpdating && (
          <button
            onClick={() => setIsUpdating(true)}
            className="mt-8 bg-red-800 px-3 py-1"
          >
            Update
          </button>
        )}
      </div>
      <div className="mt-6">
        {isUpdating && (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label>New Username</label>
                <input
                  type="text"
                  placeholder="New username"
                  name="newUsername"
                  //   required
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col">
                <label>Current password</label>
                <input
                  type="password"
                  placeholder="********"
                  name="currentPassword"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col">
                <label>New password</label>
                <input
                  type="password"
                  placeholder="********"
                  name="newPassword"
                  //   required
                  autoComplete="off"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`bg-red-700 text-white mt-6 px-3 py-1`}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
