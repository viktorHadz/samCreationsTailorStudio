export const EmailTemplate = ({
  name,
  email,
  company,
  phone,
  message,
  service,
  submittedAt = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }),
}) => {
  const serviceLabels = {
    sampling: 'Sampling',
    alterations: 'Alterations',
    manufacturing: 'Manufacturing',
    partnership: 'Something else',
  }

  return (
    <div
      style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        lineHeight: '1.6',
        color: '#0a0a0a',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
      }}
    >
      {/* Header */}
      <div
        style={{
          borderBottom: '3px solid #dc2626',
          paddingBottom: '24px',
          marginBottom: '32px',
        }}
      >
        <h1
          style={{
            fontSize: '24px',
            fontWeight: '600',
            margin: '0',
            color: '#0a0a0a',
          }}
        >
          New Project Enquiry
        </h1>
        <p
          style={{
            fontSize: '14px',
            color: '#737373',
            margin: '8px 0 0 0',
          }}
        >
          Submitted on {submittedAt}
        </p>
      </div>

      {/* Contact Information Section */}
      <div style={{ marginBottom: '32px' }}>
        <h2
          style={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#0a0a0a',
            marginBottom: '16px',
            borderLeft: '4px solid #dc2626',
            paddingLeft: '12px',
          }}
        >
          Contact Information
        </h2>

        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: '#fafafa',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <tbody>
            <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
              <td
                style={{
                  padding: '12px 16px',
                  fontWeight: '600',
                  backgroundColor: '#f5f5f5',
                  width: '140px',
                  fontSize: '14px',
                }}
              >
                Name:
              </td>
              <td
                style={{
                  padding: '12px 16px',
                  fontSize: '14px',
                }}
              >
                {name}
              </td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
              <td
                style={{
                  padding: '12px 16px',
                  fontWeight: '600',
                  backgroundColor: '#f5f5f5',
                  fontSize: '14px',
                }}
              >
                Email:
              </td>
              <td
                style={{
                  padding: '12px 16px',
                  fontSize: '14px',
                }}
              >
                <a
                  href={`mailto:${email}`}
                  style={{
                    color: '#dc2626',
                    textDecoration: 'none',
                  }}
                >
                  {email}
                </a>
              </td>
            </tr>
            {company && (
              <tr style={{ borderBottom: '1px solid #e5e5e5' }}>
                <td
                  style={{
                    padding: '12px 16px',
                    fontWeight: '600',
                    backgroundColor: '#f5f5f5',
                    fontSize: '14px',
                  }}
                >
                  Brand/Company:
                </td>
                <td
                  style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                  }}
                >
                  {company}
                </td>
              </tr>
            )}
            {phone && (
              <tr>
                <td
                  style={{
                    padding: '12px 16px',
                    fontWeight: '600',
                    backgroundColor: '#f5f5f5',
                    fontSize: '14px',
                  }}
                >
                  Phone:
                </td>
                <td
                  style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                  }}
                >
                  <a
                    href={`tel:${phone}`}
                    style={{
                      color: '#dc2626',
                      textDecoration: 'none',
                    }}
                  >
                    {phone}
                  </a>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Service Requested */}
      {service && (
        <div style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#0a0a0a',
              marginBottom: '16px',
              borderLeft: '4px solid #dc2626',
              paddingLeft: '12px',
            }}
          >
            Service Requested
          </h2>
          <div
            style={{
              backgroundColor: '#fafafa',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                backgroundColor: '#dc2626',
                color: 'white',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: '500',
              }}
            >
              {serviceLabels[service] || service}
            </span>
          </div>
        </div>
      )}

      {/* Project Message */}
      {message && (
        <div style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#0a0a0a',
              marginBottom: '16px',
              borderLeft: '4px solid #dc2626',
              paddingLeft: '12px',
            }}
          >
            Project Details
          </h2>
          <div
            style={{
              backgroundColor: '#fafafa',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #e5e5e5',
              fontSize: '14px',
              lineHeight: '1.6',
            }}
          >
            {message.split('\n').map((paragraph, index) => (
              <p
                key={index}
                style={{
                  margin: index === 0 ? '0 0 12px 0' : '12px 0',
                  ...(index === message.split('\n').length - 1 && {
                    marginBottom: 0,
                  }),
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div
        style={{
          borderTop: '1px solid #e5e5e5',
          paddingTop: '24px',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '12px',
            color: '#737373',
            margin: '0',
          }}
        >
          This email template was generated by the S.A.M. Creations Website.
        </p>
      </div>
    </div>
  )
}
