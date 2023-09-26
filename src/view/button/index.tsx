import React, { FunctionComponent } from "react";
import Button from "@para-ui/core/Button";
import Search from "@para-ui/icons/Search";
import Off from "@para-ui/icons/Off";
import More from "@para-ui/icons/More";
import "./index.scss";

//按钮
const ParaButton: FunctionComponent = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <div className={"paraui-button-demo"}>
      <Button>contained</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="text">text</Button>
      <Button
        variant="outlined"
        href={"http://fed.paraview.cn/fed"}
        target={"_blank"}
      >
        链接
      </Button>
      <Button
        variant="outlined"
        href={"http://fed.paraview.cn/fed"}
        target={"_blank"}
        disabled
      >
        链接
      </Button>
      <Button.IconButton
        variant="outlined"
        toolTipTitle={"search"}
        href={"http://fed.paraview.cn/fed"}
      >
        <Search />
      </Button.IconButton>

      <Button variant="contained" startIcon={<Search />}>
        contained
      </Button>
      <Button variant="contained" endIcon={<Search />}>
        contained
      </Button>
      <Button variant="outlined" startIcon={<Search />}>
        outlined
      </Button>
      <Button.IconButton toolTipTitle={"search"}>
        <Search />
      </Button.IconButton>
      <Button.IconButton variant={"outlined"} toolTipTitle={"search"}>
        <Search />
      </Button.IconButton>
      <Button.IconButton
        variant={"text"}
        size={"small"}
        toolTipTitle={"search"}
      >
        <Search />
      </Button.IconButton>

      <Button variant="contained" size={"large"}>
        large
      </Button>
      <Button variant="contained" size={"medium"}>
        medium
      </Button>
      <Button variant="contained" size={"small"}>
        small
      </Button>
      <Button.IconButton toolTipTitle={"search"} size={"large"}>
        <Search />
      </Button.IconButton>
      <Button.IconButton toolTipTitle={"search"} size={"medium"}>
        <Search />
      </Button.IconButton>
      <Button.IconButton toolTipTitle={"search"} size={"small"}>
        <Search />
      </Button.IconButton>
      <Button.IconButton
        variant={"text"}
        toolTipTitle={"search"}
        size={"large"}
      >
        <Search />
      </Button.IconButton>
      <Button.IconButton
        variant={"text"}
        toolTipTitle={"search"}
        size={"medium"}
      >
        <Search />
      </Button.IconButton>
      <Button.IconButton
        variant={"text"}
        toolTipTitle={"search"}
        size={"small"}
      >
        <Search />
      </Button.IconButton>
      <Button loading>loading</Button>
      <Button variant={"outlined"} loading>
        loading
      </Button>
      <Button.IconButton loading>
        <Off />
      </Button.IconButton>
      <Button.IconButton variant={"outlined"} loading>
        <Off />
      </Button.IconButton>
      <Button.IconButton
        toolTipTitle={"测试"}
        variant={"text"}
        size={"small"}
        loading={loading}
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 3000);
        }}
      >
        <Off />
      </Button.IconButton>
      <section className={"btn-disabled"}>
        <span>
          <Button disabled>disabled</Button>
        </span>
        <span>
          <Button disabled toolTipTitle={"disabled"}>
            disabled tip
          </Button>
        </span>
        <span>
          <Button.IconButton disabled toolTipTitle={"disabled"}>
            <Off />
          </Button.IconButton>
        </span>
      </section>
      <Button danger>contained danger</Button>
      <Button variant={"outlined"} danger>
        outlined danger
      </Button>
      <Button.IconButton danger>
        <Off />
      </Button.IconButton>
      <Button.IconButton variant={"outlined"} danger>
        <Off />
      </Button.IconButton>
      <section className={"split-btn-code"}>
        <Button.SplitButton
          options={[
            {
              value: "1",
              label: "btn1",
              type: "1",
            },
            {
              value: "2",
              label: "btn2",
              type: "2",
              disabled: true,
            },
            {
              value: "3",
              label: "btn3",
              type: "3",
            },
          ]}
          onClick={(option: any, evt?: any) => {
            console.log(option);
          }}
        />
        <Button.SplitButton
          iconButton={true}
          buttonText={<More />}
          options={[
            {
              value: "1",
              label: "btn1",
              type: "1",
            },
            {
              value: "2",
              label: "btn2",
              type: "2",
              disabled: true,
            },
            {
              value: "3",
              label: "btn3",
              type: "3",
            },
          ]}
          onClick={(option: any, evt?: any) => {
            console.log(option);
          }}
        />
      </section>
    </div>
  );
};

export default ParaButton;
