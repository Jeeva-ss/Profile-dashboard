export default function List({ userData, loading, error }) {
  return (
    <div className='w-11/12 drop-shadow-2xl md:w-5/12 bg-white mx-auto text-center text-slate-600 rounded-2xl border'>
      <p className='py-8 bg-zinc-200 text-xl font-bold rounded-t-2xl'>Select an account</p>
      <ul role="list" className="p-6 m-4 rounded-b-2xl bg-white divide-y divide-slate-200 h-80 overflow-y-scroll overflow-x-hidden">
        {userData.map((user) => (
          <li className="flex items-center py-4 first:pt-0 last:pb-0" key={user.id}>
            <img className="h-10 w-10 rounded-full" src={user.profilepicture} alt="user" />
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-medium text-slate-900">{user.username}</p>
            </div>
          </li>
        ))}
        {loading ? <p className="h-60 flex items-center justify-center">Loading...</p> : null}
        {error ? <p className="h-60 flex items-center justify-center">Error fetching...</p> : null}
      </ul>
    </div>
  )
}
