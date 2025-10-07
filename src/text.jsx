import './text.css';

export default function TextCustom({children}) {
return (
    <div class="wrapper">
      <svg>
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">{children}</text>
      </svg>
    </div>
  );
}