import { UserData } from "../types";

interface UserProps {
  user: UserData;
}

export default function User({ user }: UserProps) {
  const tableDataStyles =
    "text-left px-6 py-4 whitespace-nowrap border-b border-solid border-gray-300";
  return (
    <tr key={user.id}>
      <td className={tableDataStyles}>
        <div className="text-sm text-gray-500">{user.firstName}</div>
      </td>
      <td className={tableDataStyles}>
        <div className="text-sm text-gray-500">{user.lastName}</div>
      </td>
      <td className={tableDataStyles}>
        <div className="text-sm text-gray-500">{user.address}</div>
      </td>
      <td className={tableDataStyles}>
        <div className="text-sm text-gray-500">{user.dateOfBirth}</div>
      </td>
      <td className={tableDataStyles}>
        <div className="text-sm text-gray-500">{user.phoneNumber}</div>
      </td>
    </tr>
  );
}
