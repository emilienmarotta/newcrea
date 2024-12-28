export default function ProcessusStep({ num, title, desc }) {
  return (
    <div className="mx-auto flex w-[55%] flex-col gap-3 py-14 xs:w-[70%]">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-ncPurple text-2xl font-bold">
        {num}
      </div>
      <h3 className="text-ncPurple">{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
