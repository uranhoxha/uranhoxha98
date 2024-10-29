
function TaskbarItem({ href, altText, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="taskbar-pinned-wrapper"
    >
      <img alt={altText} className={className} />
    </a>
  );
}

export default TaskbarItem;
