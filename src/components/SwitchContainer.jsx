export default function SwitchContainer() {
  return (
    <div className="switch-container flex flex-col clr-neutral justify-end gap-8">
      <div>
        <input type="checkbox" id="switch" />
        <label htmlFor="switch" className="drop-shadow-md">
          Toggle
        </label>
      </div>

      <div className="line"></div>
    </div>
  );
}
