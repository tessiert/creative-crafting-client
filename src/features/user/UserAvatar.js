const UserAvatar = ({ firstname }) => {
  return (
    <span className='capitalize avatar'>
      Welcome, {firstname}
    </span>
  );
};

export default UserAvatar;
