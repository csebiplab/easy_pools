"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RobotTxtPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/robotTxt`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
          }),
        }
      );

      if (response.ok) {
        toast.success("robots.txt data submitted successfully!");
        reset(); // Reset the form after successful submission
      } else {
        toast.error("Failed to submit robots.txt data.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting the data.");
      console.error(error);
    }
  };

  return (
    <div>
      <h3 className="mb-3">Add Robot</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="block">User Agent:</label>
          <input
            className="border border-green-300 px-3 py-2 w-1/2"
            {...register("user_agent", { required: "User Agent is required" })}
            placeholder="Enter User Agent"
          />
          {errors.user_agent && (
            <p className="text-red-500">{errors.user_agent.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="block">Allow:</label>
          <input
            className="border border-green-300 px-2 py-2 w-1/2"
            {...register("allow", { required: "Allow field is required" })}
            placeholder="Enter allowed paths (comma-separated)"
          />
          {errors.allow && (
            <p className="text-red-500">{errors.allow.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label className="block">Disallow:</label>
          <input
            className="border border-green-300 px-2 py-2 w-1/2"
            {...register("disallow", {
              required: "Disallow field is required",
            })}
            placeholder="Enter disallowed paths (comma-separated)"
          />
          {errors.disallow && (
            <p className="text-red-500">{errors.disallow.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="inline bg-blue-700 text-white px-16 py-3 rounded-lg mt-3"
          aria-label="Submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RobotTxtPage;
