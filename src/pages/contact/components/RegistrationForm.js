import { Button, Form, Input, Select } from 'antd';
import styles from './RegistrationForm.less';

const FormItem = Form.Item;
const Option = Select.Option;

function RegistrationForm({ dispatch, form }) {

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 6 },
            md: { span: 24 },
            lg: { span: 8 }
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
            md: { span: 24 },
            lg: { span: 12 }
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 18,
                offset: 6,
            },
            md: {
                span: 24,
                offset: 0
            },
            lg: {
                span: 16,
                offset: 8
            }

        },
    };

    const { getFieldDecorator } = form;

    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '60',
    })(
        <Select style={{ width: 70 }}>
            <Option value="60">+60</Option>
        </Select>
    );

    return (
        <Form className={styles.registrationForm}>
            <FormItem
                {...formItemLayout}
                label={(
                    <span>
                        Your Name
                    </span>
                )}
            >
                {getFieldDecorator('Name', {
                    rules: [{ required: true, message: 'Please input your name!', whitespace: true }],
                })(
                    <Input />
                )}
            </FormItem>
            <FormItem
                {...formItemLayout}
                label={(
                    <span>
                        Company Name
                    </span>
                )}
            >
                {getFieldDecorator('companyName', {

                })(
                    <Input />
                )}
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="E-mail"
            >
                {getFieldDecorator('email', {
                    rules: [{
                        type: 'email', message: 'The input is not valid E-mail!',
                    }, {
                        required: true, message: 'Please input your E-mail!',
                    }],
                })(
                    <Input />
                )}
            </FormItem>
            <FormItem
                {...formItemLayout}
                label="Phone Number"
            >
                {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your phone number!' }],
                })(
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
                <Button ghost htmlType="submit">Submit</Button>
            </FormItem>
        </Form>
    );
}

export default Form.create()(RegistrationForm);