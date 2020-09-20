import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';

const { Option } = Select;


const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
      offset: 4,
      span: 12,
    },
};

export default function FormTable(props){

    const [form] = Form.useForm();
    const { formConfigArr } = props

    props.setForm && props.setForm(form)

    const onReset = () => {}

    const onFinish = (values) => {
        console.log(values);

    };

    const onGenderChange = () => {

    }

    const renderItem = (item) => {
        const { type, placeholder, options } = item
        switch (type) {
            case 'input':
                return <Input />
            case 'select':
                return (
                    <Select
                        placeholder={placeholder}
                        onChange={onGenderChange}
                        allowClear
                    >   
                        {
                            options.map(val=>{
                                return <Option value={val.label}>{val.val}</Option>
                            })
                        }
                    </Select>
                )
        }
    }

    return (
        <div>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                {
                    formConfigArr && formConfigArr.map(item=>{
                        const { label, name, required} = item
                        return (
                            <Form.Item
                                name={name}
                                label={label}
                                rules={[
                                {
                                    required,
                                }]}
                            >
                                {
                                    renderItem(item)
                                }
                            </Form.Item>
                        )
                    })
                }
            </Form>
        </div>
    )
}