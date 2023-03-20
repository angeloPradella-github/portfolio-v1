export default function EmailLink() {
  return (
    <div className="email-container flex flex-col clr-neutral gap-6">
      <a className="flex flex-col" href="">
        <span className="email-link ff-accent text-xs up-transition">
          angelogpradella@gmail.com
        </span>
      </a>
      <div className="line"></div>
    </div>
  );
}
