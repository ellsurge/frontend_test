import React, { useState } from "react";
import { DatePicker, Upload, Button, Select, Input } from "antd";
import { CameraFilled, UploadOutlined } from "@ant-design/icons";
import moment from "moment";

const { TextArea } = Input;
const { Option } = Select;

const VoteForm: React.FC = () => {
  const [category, setCategory] = useState<string | null>(null);
  const [voteTitle, setVoteTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [startDate, setStartDate] = useState<string | null>(null);
  const [image, setImage] = useState<any>(null);
  const [fileList, setFileList] = useState<any[]>([]);

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleDateChange = (date: any, dateString: string) => {
    setStartDate(dateString);
  };

  const handleImageUpload = (info: any) => {
    let newFileList = [...info.fileList];

    // Restrict to one file (or set a limit)
    newFileList = newFileList.slice(-1);

    setFileList(newFileList);
  };

  const handleSubmit = () => {
    // Logic to handle form submission
    const formData = {
      category,
      voteTitle,
      description,
      startDate,
      image,
    };
    console.log("Form Submitted:", formData);
  };

  return (
    <div>
      <h2 className='mb-4 p-2 text-center text-xl font-bold'>Vote</h2>

      {/* Info Text */}
      <div className='text-black-500 w-500 mb-4 bg-blue-100 p-2'>
        <span style={{ color: "blue", fontWeight: "bold" }}>10 FAO</span> will
        be deducted when voting is generated (Amount : 9 FAO)
      </div>

      <div className='p-4'>
        {/* Category Dropdown */}
        <div className='mb-4'>
          <label className='mb-2 block text-gray-600'>Category</label>
          <Select
            className='w-full'
            placeholder='Select Category'
            onChange={handleCategoryChange}
          >
            <Option value='birthday_ad'>Birthday AD</Option>
            <Option value='event'>Event</Option>
            {/* Add more options as necessary */}
          </Select>
        </div>

        {/* Vote Title */}
        <div className='mb-4'>
          <label className='mb-2 block text-gray-600'>Vote Title</label>
          <Input
            placeholder='Title'
            value={voteTitle}
            onChange={(e) => setVoteTitle(e.target.value)}
          />
        </div>

        {/* Image Upload */}
        <div className='mb-4'>
          <label className='mb-2 block text-gray-600'>Image</label>
          <Upload.Dragger
            name='image'
            multiple={false} // Allow only one image
            beforeUpload={() => false} // Prevent auto-upload
            fileList={fileList} // Manage file state
            onChange={handleImageUpload}
            style={{
              width: "100%",
              height: "300%",
              border: "2px  #d9d9d9",
              backgroundColor: "#fafafa",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className='ant-upload-drag-icon'>
              <CameraFilled style={{ fontSize: "28px", color: "gray" }} />
            </p>
            <p className='ant-upload-text'></p>
          </Upload.Dragger>
        </div>

        {/* Description */}
        <div className='mb-4'>
          <label className='mb-2 block text-gray-600'>Description</label>
          <TextArea
            rows={4}
            placeholder='Please write down a description of the event'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Start Date */}
        <div className='mb-4'>
          <label className='mb-2 block text-gray-600'>Start</label>
          <DatePicker
            className='w-full'
            format='YYYY-MM-DD'
            onChange={handleDateChange}
            defaultValue={moment("2024-09-06", "YYYY-MM-DD")}
          />
        </div>

        {/* Submit Button */}
        <Button type='primary' className='w-full' onClick={handleSubmit}>
          Create Vote
        </Button>
      </div>
    </div>
  );
};

export default VoteForm;
