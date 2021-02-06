import React from "react";
/**
 * A Componenet which builds a form based on the data passed on it
 * This is used to ensure a unified form style is applied across the site
 */
const FormBuilder = ({ formData }) => {
  const formStyle =
    "w-3/4 block placeholder-gray-500 border rounded-sm py-2 px-4 text-gray-700 mb-2";
  /**
   * Creates an input field componenet with the specified content
   * @param form the details regarding the form created
   */
  const getInputField = (form) => {
    return (
      <React.Fragment>
        <label className="w-1/4" htmlFor={form.label}>
          {form.label}
        </label>
        <input
          name={form.label}
          className={formStyle}
          placeholder="..."
          value={form.stateValue}
          onChange={(event) => {
            form.onChange(event.target.value);
          }}
        />
      </React.Fragment>
    );
  };
  /**
   * Creates a text area componenet with the specified content
   * @param form the details regarding the form created
   */
  const getTextArea = (form) => {
    return (
      <React.Fragment>
        <label className="w-1/4" htmlFor={form.label}>
          {form.label}
        </label>
        <textarea
          name={form.label}
          className={formStyle}
          placeholder="......."
          value={form.stateValue}
          onChange={(event) => {
            form.onChange(event.target.value);
          }}
        />
      </React.Fragment>
    );
  };
  /**
   * Creates a select field componenet with the specified content alongside its options
   * @param form the details regarding the form created
   */
  const getSelectField = (form) => {
    const renderOptions = form.options.map((option) => {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      );
    });
    return (
      <React.Fragment>
        <label className="w-1/4" htmlFor={form.label}>
          {form.label}
        </label>
        <select
          name={form.label}
          className={formStyle}
          value={form.stateValue}
          onChange={(event) => {
            form.onChange(event.target.value);
          }}
        >
          <option value=""> </option>
          {renderOptions}
        </select>
      </React.Fragment>
    );
  };
  /**
   * Creates a date picker componenet with the specified content
   * @param form the details regarding the form created
   */
  const getDatePicker = (form) => {
    return (
      <React.Fragment>
        <label className="w-1/4" htmlFor={form.label}>
          {form.label}
        </label>
        <input
          name={form.label}
          type="date"
          className={formStyle}
          value={form.stateValue}
          min={form.min}
          onChange={(event) => {
            form.onChange(event.target.value);
          }}
        />
      </React.Fragment>
    );
  };

  /** Renders form content based on the @formData passed */
  const renderFormContent = formData.map((form) => {
    switch (form.type) {
      case "input":
        return (
          <React.Fragment key={form.label}>
            {getInputField(form)}
          </React.Fragment>
        );
      case "text-area":
        return (
          <React.Fragment key={form.label}>{getTextArea(form)}</React.Fragment>
        );
      case "select":
        return (
          <React.Fragment key={form.label}>
            {getSelectField(form)}
          </React.Fragment>
        );
      case "date-picker":
        return (
          <React.Fragment key={form.label}>
            {getDatePicker(form)}
          </React.Fragment>
        );
      default:
        return <p>Type Of {form.type} is currently not supported</p>;
    }
  });
  return <div className="flex flex-wrap items-center">{renderFormContent}</div>;
};

export default FormBuilder;
