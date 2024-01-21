export function Title({ children }: { children: string }) {
  return (
    <h1 className="text-center text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-9xl">
      <span className="block uppercase text-yellow-500 drop-shadow-md">
        {children}
      </span>
    </h1>
  );
}
