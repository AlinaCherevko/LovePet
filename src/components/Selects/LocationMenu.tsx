import { type FC } from "react";
import { components, MenuListProps } from "react-select";
import { FixedSizeList as List } from "react-window";

// interface IOptionType {
//   value: string;
//   label: string;
// }

const MenuList: FC<MenuListProps> = (props) => {
  const { options, children, maxHeight, getValue } = props;
  const height = 45;
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * height;

  if (!children) {
    return null;
  }

  return (
    <components.MenuList {...props}>
      <List
        width="100%"
        height={maxHeight}
        itemCount={options ? options.length : 0}
        itemSize={height}
        initialScrollOffset={initialOffset}
      >
        {({ index, style }) => (
          <div style={style}>{(children as JSX.Element[])[index]}</div>
        )}
      </List>
    </components.MenuList>
  );
};

export default MenuList;

// import { type FC } from "react";
// import { components } from "react-select";

// import { FixedSizeList as List } from "react-window";

// interface IList {
//   value: string;
//   label: string;
// }

// interface IMenuListProps {
//   options: IList[];
//   children: JSX.Element[];
//   maxHeight: number;
//   getValue: () => IList[];
// }

// const MenuList: FC<IMenuListProps> = (props) => {
//   const { options, children, maxHeight, getValue } = props;
//   const height = 45;
//   const [value] = getValue();
//   const initialOffset = options.indexOf(value) * height;

//   return (
//     <components.MenuList {...props}>
//       <List
//         width="100%"
//         height={maxHeight}
//         itemCount={options.length}
//         itemSize={height}
//         initialScrollOffset={initialOffset}
//       >
//         {({ index, style }) => <div style={style}>{children[index]}</div>}
//       </List>
//     </components.MenuList>
//   );
// };

// export default MenuList;
