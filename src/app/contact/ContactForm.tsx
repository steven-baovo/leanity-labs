"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [trackingCode, setTrackingCode] = useState("");
  const [emailWarning, setEmailWarning] = useState("");

  const formatName = (value: string) => {
    // Tự động viết hoa chữ cái đầu của mỗi từ để form trông chuyên nghiệp hơn
    return value
      .toLowerCase()
      .replace(/(^|\s)\S/g, (char) => char.toUpperCase());
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: formatName(e.target.value) });
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setFormData({ ...formData, email: val });
    
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }

    // Cảnh báo nếu người dùng nhập email công cộng thay vì email doanh nghiệp/học thuật
    if (val && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(val)) {
      setEmailWarning(""); // Để validation chính xử lý định dạng sai
    } else if (val) {
      const domain = val.split("@")[1]?.toLowerCase();
      const publicDomains = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "aol.com"];
      if (publicDomains.includes(domain)) {
        setEmailWarning("Khuyên dùng email doanh nghiệp hoặc email học thuật (.edu) để được ưu tiên xử lý phản hồi.");
      } else {
        setEmailWarning("");
      }
    } else {
      setEmailWarning("");
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ và tên của bạn.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng cung cấp email liên hệ.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Địa chỉ email không đúng định dạng.";
    }

    if (!formData.organization.trim()) {
      newErrors.organization = "Vui lòng nhập tên cơ quan, trường học hoặc doanh nghiệp.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Vui lòng nhập nội dung đề xuất liên hệ.";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Nội dung liên hệ quá ngắn. Vui lòng mô tả tối thiểu 20 ký tự để ban biên soạn có đầy đủ thông tin.";
    }

    if (!formData.consent) {
      newErrors.consent = "Bạn cần đồng ý với chính sách bảo mật thông tin nghiên cứu.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Giả lập cuộc gọi API gửi thư học thuật lên Ban Thư Ký
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Tạo mã tracking code học thuật chuyên nghiệp
      const year = new Date().getFullYear();
      const randomId = Math.floor(1000 + Math.random() * 9000);
      setTrackingCode(`LL-${year}-${randomId}`);
      setIsSuccess(true);
    } catch (err) {
      setErrors({ global: "Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng liên hệ trực tiếp qua email." });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-bg-dark border border-border-dark rounded-default p-8 text-center max-w-[680px] mx-auto my-6 animate-[fadeIn_0.5s_ease-out]">
        <div className="w-16 h-16 bg-[#eefaf0] text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h3 className="font-serif font-bold text-2xl text-text-primary mb-3">
          Đề Xuất Đã Được Lưu Trữ Thành Công
        </h3>
        
        <p className="font-sans text-sm text-text-secondary leading-[1.6] max-w-[520px] mx-auto mb-6">
          Ban thư ký Học thuật của <strong className="text-text-primary">Leanity Labs</strong> đã tiếp nhận tài liệu liên hệ của bạn. Một bản sao xác nhận đã được gửi về hòm thư điện tử <span className="font-semibold text-primary">{formData.email}</span>.
        </p>

        <div className="bg-bg-surface border border-border-color rounded-md p-5 max-w-[420px] mx-auto mb-8 text-left">
          <div className="flex justify-between items-center border-b border-border-color pb-3.5 mb-3.5">
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.05em] text-text-muted">Mã Tra Cứu Yêu Cầu:</span>
            <span className="font-mono text-sm font-bold text-primary select-all">{trackingCode}</span>
          </div>
          <div className="text-[0.78rem] text-text-secondary flex flex-col gap-2">
            <div><strong className="text-text-primary">Người gửi:</strong> {formData.name}</div>
            <div><strong className="text-text-primary">Đơn vị:</strong> {formData.organization}</div>
          </div>
        </div>

        <p className="text-[0.75rem] text-text-muted italic max-w-[460px] mx-auto mb-6">
          Cam kết phản hồi chuyên môn: Đội ngũ biên tập viên học thuật sẽ thẩm định và phản hồi bằng văn bản chính thức tới bạn trong vòng 24 giờ làm việc.
        </p>

        <button
          onClick={() => {
            setIsSuccess(false);
            setFormData({
              name: "",
              email: "",
              organization: "",
              message: "",
              consent: false,
            });
            setEmailWarning("");
          }}
          className="inline-flex items-center gap-2 bg-text-primary text-white rounded-full py-2.5 px-6 font-sans text-xs font-semibold tracking-[0.02em] transition-all hover:bg-primary cursor-pointer hover:shadow-subtle"
        >
          Gửi Đề Xuất Khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left" noValidate>
      {errors.global && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-default p-4 flex gap-3 items-center">
          <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span>{errors.global}</span>
        </div>
      )}

      {/* Field: Full Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor="form-name" className="font-sans text-xs font-bold text-text-primary uppercase tracking-[0.05em] flex justify-between">
          <span>Họ và Tên <span className="text-red-500">*</span></span>
          <span className="text-[0.7rem] text-text-muted normal-case font-normal">Tự động định dạng viết hoa</span>
        </label>
        <input
          id="form-name"
          type="text"
          value={formData.name}
          onChange={handleNameChange}
          placeholder="Ví dụ: Nguyễn Văn A"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`w-full bg-bg-surface border ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-border-dark focus:border-primary'} rounded-default py-2.5 px-4 font-sans text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-200`}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-[0.75rem] font-medium mt-1 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{errors.name}</span>
          </p>
        )}
      </div>

      {/* Field: Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="form-email" className="font-sans text-xs font-bold text-text-primary uppercase tracking-[0.05em]">
          Email công tác <span className="text-red-500">*</span>
        </label>
        <input
          id="form-email"
          type="email"
          value={formData.email}
          onChange={handleEmailChange}
          placeholder="name@organization.com"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : emailWarning ? "email-warning" : undefined}
          className={`w-full bg-bg-surface border ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-border-dark focus:border-primary'} rounded-default py-2.5 px-4 font-sans text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-200`}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-[0.75rem] font-medium mt-1 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{errors.email}</span>
          </p>
        )}
        {emailWarning && !errors.email && (
          <p id="email-warning" className="text-amber-600 text-[0.72rem] font-normal leading-[1.4] mt-1 flex items-start gap-1">
            <svg className="w-3.5 h-3.5 shrink-0 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{emailWarning}</span>
          </p>
        )}
      </div>

      {/* Field: Organization */}
      <div className="flex flex-col gap-2">
        <label htmlFor="form-organization" className="font-sans text-xs font-bold text-text-primary uppercase tracking-[0.05em]">
          Đơn vị công tác / Doanh nghiệp <span className="text-red-500">*</span>
        </label>
        <input
          id="form-organization"
          type="text"
          value={formData.organization}
          onChange={(e) => {
            setFormData({ ...formData, organization: e.target.value });
            if (errors.organization) {
              setErrors((prev) => ({ ...prev, organization: "" }));
            }
          }}
          placeholder="Ví dụ: Trường Đại học / Tổ chức khoa học / Đơn vị công tác..."
          required
          aria-required="true"
          aria-invalid={!!errors.organization}
          aria-describedby={errors.organization ? "organization-error" : undefined}
          className={`w-full bg-bg-surface border ${errors.organization ? 'border-red-500 focus:border-red-500' : 'border-border-dark focus:border-primary'} rounded-default py-2.5 px-4 font-sans text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-200`}
        />
        {errors.organization && (
          <p id="organization-error" className="text-red-500 text-[0.75rem] font-medium mt-1 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{errors.organization}</span>
          </p>
        )}
      </div>


      {/* Field: Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="form-message" className="font-sans text-xs font-bold text-text-primary uppercase tracking-[0.05em] flex justify-between">
          <span>Nội dung đề xuất chi tiết <span className="text-red-500">*</span></span>
          <span className="text-[0.7rem] text-text-muted normal-case font-normal">Tối thiểu 20 ký tự</span>
        </label>
        <textarea
          id="form-message"
          rows={5}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) {
              setErrors((prev) => ({ ...prev, message: "" }));
            }
          }}
          placeholder="Mô tả tóm tắt câu hỏi học thuật, ý kiến đóng góp hoặc nội dung phản biện chuyên môn của bạn gửi tới Ban Biên tập..."
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full bg-bg-surface border ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-border-dark focus:border-primary'} rounded-default py-2.5 px-4 font-sans text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors duration-200 resize-y min-h-[120px]`}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-[0.75rem] font-medium mt-1 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Field: Consent (Checkbox) */}
      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => {
              setFormData({ ...formData, consent: e.target.checked });
              if (errors.consent) {
                setErrors((prev) => ({ ...prev, consent: "" }));
              }
            }}
            aria-required="true"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="sr-only peer"
          />
          <div className="w-4 h-4 shrink-0 rounded border border-border-strong bg-bg-surface flex items-center justify-center transition-all peer-checked:bg-primary peer-checked:border-primary peer-focus:ring-2 peer-focus:ring-primary/20 mt-0.5">
            <svg className="w-3 h-3 text-white scale-0 transition-transform peer-checked:scale-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="font-sans text-[0.78rem] leading-[1.4] text-text-secondary">
            Tôi đồng ý cung cấp thông tin liên hệ và chấp thuận rằng dữ liệu này sẽ được Leanity Labs xử lý bảo mật tuyệt đối theo <a href="/privacy" target="_blank" className="text-primary hover:underline font-medium">Chính sách Bảo mật</a> của Leanity Labs.
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="text-red-500 text-[0.75rem] font-medium mt-1 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{errors.consent}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto self-start inline-flex items-center justify-center gap-2 bg-[#191919] hover:bg-primary text-white rounded-full py-3 px-8 font-sans text-xs font-bold uppercase tracking-[0.05em] transition-all cursor-pointer disabled:bg-text-muted disabled:cursor-not-allowed hover:shadow-subtle"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Đang gửi lưu trữ...</span>
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <span>Gửi Đề Xuất Hợp Tác</span>
          </>
        )}
      </button>
    </form>
  );
}
