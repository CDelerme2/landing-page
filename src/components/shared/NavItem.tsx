interface navItemProps {
  href: string;
  text: string;
}

export const NavItem = ({ href, text }: navItemProps) => {
  return (
    <li className="duration-300 font-medium ease-linear hover:text-primary py-3">
      <a href={href}>{text}</a>
    </li>
  );
};
