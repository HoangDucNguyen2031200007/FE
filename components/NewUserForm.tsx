import { FieldError, useForm } from "react-hook-form";
import { NewUserData } from "../types";

type Props = {
  onSave: (newPost: NewUserData) => void;
};
export function NewPostForm({ onSave }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<NewUserData>();

  const fieldStyle = "flex flex-col mb-2";
  const borderStyle = "border border-solid";

  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? "border-red-500" : "";
  }
  return (
    <form noValidate className="border-b py-4" onSubmit={handleSubmit(onSave)}>
      <div className={fieldStyle}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          {...register("firstName", {
            required: "You must enter your first name",
          })}
          className={getEditorStyle(errors.firstName) + " " + borderStyle}
        />
      </div>
      <div className={fieldStyle}>
        <label htmlFor="lastName">Last Name</label>
        <textarea
          id="lastName"
          {...register("lastName", {
            required: "You must enter your last name",
          })}
          className={getEditorStyle(errors.lastName) + " " + borderStyle}
        />
      </div>
      <div className={fieldStyle}>
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          {...register("address", {
            required: "You must enter your address",
          })}
          className={getEditorStyle(errors.address) + " " + borderStyle}
        />
      </div>
      <div className={fieldStyle}>
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <textarea
          id="dateOfBirth"
          {...register("dateOfBirth", {
            required: "You must enter your date of birth",
          })}
          className={getEditorStyle(errors.dateOfBirth) + " " + borderStyle}
        />
      </div>
      <div className={fieldStyle}>
        <label htmlFor="phoneNumber">Phone Number</label>
        <textarea
          id="phoneNumber"
          {...register("phoneNumber", {
            required: "You must enter your phone number",
          })}
          className={getEditorStyle(errors.phoneNumber) + " " + borderStyle}
        />
      </div>
      <div className={fieldStyle}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 h-10 px-6 font-semibold bg-black text-white"
        >
          Save
        </button>
        {isSubmitSuccessful && (
          <div role="alert" className="text-green-500 text-xs mt-1">
            The post was successfully saved
          </div>
        )}
      </div>
    </form>
  );
}
