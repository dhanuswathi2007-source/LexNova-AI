<Link
  key={index}
  to={module.path}
  className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition duration-300 shadow-lg"
>
  <div className="flex items-center gap-3">
    {module.icon}
    <h3 className="text-lg font-medium">
      {module.name}
    </h3>
  </div>
</Link>