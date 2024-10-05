import { Link } from 'react-router-dom';

export default function Profile({ currentUser }) {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img
          src={currentUser.avatar} // Display the user's current avatar
          alt='profile'
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />
        <input
          type='text'
          placeholder='username'
          defaultValue={currentUser.username}
          id='username'
          className='border p-3 rounded-lg'
          readOnly // Make the field read-only if you don't want it to be editable
        />
        <input
          type='email'
          placeholder='email'
          id='email'
          defaultValue={currentUser.email}
          className='border p-3 rounded-lg'
          readOnly // Make the field read-only if you don't want it to be editable
        />
        <input
          type='password'
          placeholder='password'
          id='password'
          className='border p-3 rounded-lg'
          readOnly // Make the field read-only if you don't want it to be editable
        />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95'>
          Update
        </button>
        <Link
          className='bg-green-700 text-white p-3 rounded-lg uppercase text-center hover:opacity-95'
          to={'/create-listing'}
        >
          Create Listing
        </Link>
      </form>

      <button className='text-green-700 w-full'>
        Show Listings
      </button>

      {/* Static representation of user listings can go here */}
    </div>
  );
}
